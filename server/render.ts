import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import type { ViteDevServer } from "vite";
import type { CmsData } from "../src/cms/types";
import { getSnapshot } from "./db";
import { matchRoute } from "./routes";

const root = process.cwd();
const dirname = path.dirname(fileURLToPath(import.meta.url));

interface RenderModule {
  render: (url: string, data: CmsData) => string;
}

export interface RenderResult {
  html: string;
  statusCode: number;
}

let productionTemplate: string | null = null;

async function readTemplate(): Promise<string> {
  if (productionTemplate) return productionTemplate;
  const template = await readFile(
    path.join(root, "dist", "client", "index.html"),
    "utf8"
  );
  productionTemplate = template;
  return template;
}

async function loadEntry(vite?: ViteDevServer): Promise<RenderModule> {
  if (vite) {
    return (await vite.ssrLoadModule("/src/entry-server.tsx")) as RenderModule;
  }
  const entryPath = path.join(dirname, "entry-server.js");
  return (await import(pathToFileURL(entryPath).href)) as RenderModule;
}

function serializeData(data: CmsData): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

// Node's HTTP layer interprets raw non-ASCII bytes in request lines as latin1
// and keeps percent-encoded UTF-8 sequences untouched. Normalize both so route
// matching sees the real (decoded) pathname.
function normalizePathname(url: string): string {
  let pathname = new URL(url, "http://localhost").pathname;
  if ([...pathname].some((char) => char.charCodeAt(0) > 0x7f)) {
    pathname = Buffer.from(pathname, "latin1").toString("utf8");
  }
  return pathname
    .split("/")
    .map((segment) => {
      try {
        return decodeURIComponent(segment);
      } catch {
        return segment;
      }
    })
    .join("/");
}

export async function renderPage(
  url: string,
  vite?: ViteDevServer
): Promise<RenderResult> {
  const data = await getSnapshot();
  const pathname = normalizePathname(url);
  const match = matchRoute(pathname, data.pages);
  const page = match?.page;

  const entry = await loadEntry(vite);
  const appHtml = entry.render(url, data);

  let template: string;
  if (vite) {
    const source = await readFile(path.join(root, "index.html"), "utf8");
    template = await vite.transformIndexHtml(url, source);
  } else {
    template = await readTemplate();
  }

  let html = template.replace(
    "<!--ssr-outlet-->",
    `${appHtml}\n<script>window.__CMS_DATA__ = ${serializeData(
      data
    )};</script>`
  );

  if (typeof page?.meta.title === "string") {
    html = html.replace(
      /<title>[^<]*<\/title>/,
      `<title>${page.meta.title}</title>`
    );
  }

  const statusCode = page?.template === "not_found" ? 404 : 200;
  return { html, statusCode };
}

import express from "express";
import path from "node:path";
import { createServer as createViteServer } from "vite";
import type { ViteDevServer } from "vite";
import { renderPage } from "./render";

const isProduction = process.argv.includes("--production");
const port = Number(process.env.PORT ?? 5173);

function renderErrorPage(error: unknown): string {
  const message = error instanceof Error ? error.message : String(error);
  return `<!doctype html>
<html lang="de">
  <head><meta charset="UTF-8" /><title>Serverfehler</title></head>
  <body style="font-family: sans-serif; padding: 3rem; line-height: 1.6">
    <h1>Serverfehler</h1>
    <p>Die Seite konnte nicht gerendert werden. Läuft die Datenbank?</p>
    <p>Starte sie mit <code>docker compose up -d</code> und versuche es erneut.</p>
    <pre style="background: #f5f5f5; padding: 1rem; overflow: auto">${message}</pre>
  </body>
</html>`;
}

async function createApp() {
  const app = express();
  app.disable("x-powered-by");

  let vite: ViteDevServer | undefined;
  if (!isProduction) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom",
    });
    app.use(vite.middlewares);
  } else {
    app.use(
      express.static(path.resolve(process.cwd(), "dist", "client"), {
        index: false,
      })
    );
  }

  app.use(async (req, res) => {
    try {
      const { html, statusCode } = await renderPage(req.originalUrl, vite);
      res.status(statusCode).setHeader("Content-Type", "text/html").send(html);
    } catch (error) {
      console.error("SSR error:", error);
      if (vite && error instanceof Error) {
        vite.ssrFixStacktrace(error);
      }
      res.status(500).setHeader("Content-Type", "text/html").send(renderErrorPage(error));
    }
  });

  return app;
}

async function start() {
  const app = await createApp();
  app.listen(port, () => {
    console.log(
      `Jubla Triengen server (${isProduction ? "production" : "development"}) listening on http://localhost:${port}`
    );
  });
}

start().catch((error) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});

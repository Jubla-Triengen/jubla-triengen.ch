import type { CmsPage } from "../src/cms/types";

export interface RouteMatch {
  page: CmsPage;
  params: Record<string, string>;
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function compileRoute(route: string): RegExp | null {
  if (route === "*") return null;
  const pattern = route
    .split("/")
    .map((segment) =>
      segment.startsWith(":") ? "([^/]+)" : escapeRegExp(segment)
    )
    .join("/");
  return new RegExp(`^${pattern}/?$`);
}

export function matchRoute(
  pathname: string,
  pages: CmsPage[]
): RouteMatch | undefined {
  let catchAll: CmsPage | undefined;
  const concrete: CmsPage[] = [];

  for (const page of pages) {
    if (page.route === "*") {
      catchAll = page;
    } else {
      concrete.push(page);
    }
  }

  concrete.sort((a, b) => {
    const aDynamic = a.route.includes(":");
    const bDynamic = b.route.includes(":");
    if (aDynamic !== bDynamic) return aDynamic ? 1 : -1;
    return a.sortOrder - b.sortOrder;
  });

  for (const page of concrete) {
    const regex = compileRoute(page.route);
    if (!regex) continue;
    const match = pathname.match(regex);
    if (!match) continue;

    const paramNames = page.route
      .split("/")
      .filter((segment) => segment.startsWith(":"))
      .map((segment) => segment.slice(1));

    const params: Record<string, string> = {};
    paramNames.forEach((name, index) => {
      params[name] = decodeURIComponent(match[index + 1]);
    });

    return { page, params };
  }

  return catchAll ? { page: catchAll, params: {} } : undefined;
}

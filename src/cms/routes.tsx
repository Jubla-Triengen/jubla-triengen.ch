import { useMemo } from "react";
import { useRoutes } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import { useCmsData } from "./context";
import { templateRegistry } from "./registry";
import NotFoundTemplate from "./templates/NotFound";
import type { CmsPage } from "./types";

function PageView({ page }: { page: CmsPage }) {
  const Template = templateRegistry[page.template] ?? NotFoundTemplate;
  return <Template pageKey={page.key} />;
}

export default function AppRoutes() {
  const data = useCmsData();

  const routes = useMemo<RouteObject[]>(() => {
    const result: RouteObject[] = [];
    let notFoundPage: CmsPage | undefined;

    for (const page of data.pages) {
      if (page.route === "*") {
        notFoundPage = page;
        continue;
      }
      if (!templateRegistry[page.template]) continue;
      result.push({ path: page.route, element: <PageView page={page} /> });
    }

    result.push({
      path: "*",
      element: notFoundPage ? (
        <PageView page={notFoundPage} />
      ) : (
        <NotFoundTemplate />
      ),
    });

    return result;
  }, [data]);

  return useRoutes(routes);
}

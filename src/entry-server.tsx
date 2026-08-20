import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App";
import CmsDataProvider from "./cms/provider";
import type { CmsData } from "./cms/types";

export function render(url: string, data: CmsData): string {
  return renderToString(
    <StrictMode>
      <CmsDataProvider value={data}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </CmsDataProvider>
    </StrictMode>
  );
}

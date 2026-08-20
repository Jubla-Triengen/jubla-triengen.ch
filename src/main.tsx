import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import CmsDataProvider from "./cms/provider.tsx";
import type { CmsData } from "./cms/types.ts";
import "./index.css";

declare global {
  interface Window {
    __CMS_DATA__?: CmsData;
  }
}

const data = window.__CMS_DATA__;

if (!data) {
  throw new Error(
    "CMS data snapshot missing. The app must be served through the SSR server (npm run dev / npm start)."
  );
}

hydrateRoot(
  document.getElementById("root")!,
  <StrictMode>
    <CmsDataProvider value={data}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CmsDataProvider>
  </StrictMode>
);

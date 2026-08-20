import { createContext, useContext } from "react";
import type { CmsData, CmsPage, CmsSection } from "./types";

const CmsDataContext = createContext<CmsData | null>(null);

export function useCmsData(): CmsData {
  const data = useContext(CmsDataContext);
  if (!data) {
    throw new Error("useCmsData must be used within a CmsDataProvider");
  }
  return data;
}

export function useCmsPage(pageKey: string): CmsPage | undefined {
  const data = useCmsData();
  return data.pages.find((page) => page.key === pageKey);
}

export function useCmsSections(pageKey: string): CmsSection[] {
  const data = useCmsData();
  return data.sections
    .filter((section) => section.pageKey === pageKey)
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

export { CmsDataContext };

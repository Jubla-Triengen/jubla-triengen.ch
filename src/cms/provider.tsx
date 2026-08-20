import type { ReactNode } from "react";
import { CmsDataContext } from "./context";
import type { CmsData } from "./types";

interface CmsDataProviderProps {
  value: CmsData;
  children: ReactNode;
}

export default function CmsDataProvider({
  value,
  children,
}: CmsDataProviderProps) {
  return (
    <CmsDataContext.Provider value={value}>{children}</CmsDataContext.Provider>
  );
}

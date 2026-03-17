import LegalPageLayout from "../components/ui/LegalPageLayout";
import { dataProtectionData } from "../data/dataProtection";
import { getPageConfig } from "../data/pages";

export default function DataProtection() {
  const page = getPageConfig("dataProtection");

  if (!page.hero) {
    return null;
  }

  return <LegalPageLayout hero={page.hero} data={dataProtectionData} />;
}

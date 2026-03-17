import LegalPageLayout from "../components/ui/LegalPageLayout";
import { impressumData } from "../data/impressum";
import { getPageConfig } from "../data/pages";

export default function Impressum() {
  const page = getPageConfig("impressum");

  if (!page.hero) {
    return null;
  }

  return <LegalPageLayout hero={page.hero} data={impressumData} />;
}

import LegalPageLayout from "../components/ui/LegalPageLayout";
import { privacyData } from "../data/legal";

export default function DataProtection() {
  return <LegalPageLayout data={privacyData} />;
}

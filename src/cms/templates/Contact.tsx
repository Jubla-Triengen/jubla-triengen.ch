import PageHero from "../../components/ui/PageHero";
import { useCmsPage, useCmsSections } from "../context";
import SectionRenderer from "../sections";

export default function ContactTemplate() {
  const page = useCmsPage("contact");
  const sections = useCmsSections("contact");

  return (
    <div className="min-h-screen bg-gray-50">
      {page?.hero && <PageHero {...page.hero} />}
      <SectionRenderer sections={sections} />
    </div>
  );
}

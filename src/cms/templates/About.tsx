import PageHero from "../../components/ui/PageHero";
import { useCmsPage, useCmsSections } from "../context";
import SectionRenderer from "../sections";

export default function AboutTemplate() {
  const page = useCmsPage("about");
  const sections = useCmsSections("about");

  return (
    <div className="min-h-screen bg-gray-50">
      {page?.hero && <PageHero {...page.hero} />}
      <SectionRenderer sections={sections} />
    </div>
  );
}

import { useNavigate } from "react-router-dom";
import PageHero from "../components/ui/PageHero";
import ContentImageSection from "../components/ui/ContentImageSection";
import { aboutPageData } from "../data/about";
import { getPageConfig } from "../data/pages";

export default function About() {
  const navigate = useNavigate();
  const page = getPageConfig("about");
  const { sections } = aboutPageData;

  return (
    <div className="min-h-screen bg-gray-50">
      {page.hero && <PageHero {...page.hero} />}

      {sections.map((section, index) => (
        <ContentImageSection
          key={section.id}
          id={section.id}
          title={section.title}
          paragraphs={section.paragraphs}
          image={section.image}
          button={
            section.button
              ? {
                  text: section.button.text,
                  action: () => navigate(section.button!.link),
                }
              : undefined
          }
          imagePosition={section.imagePosition}
          backgroundColor={section.backgroundColor}
          decorativeCircle={index % 2 === 0}
        />
      ))}
    </div>
  );
}

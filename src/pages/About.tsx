import { useNavigate } from "react-router-dom";
import PageHero from "../components/ui/PageHero";
import ContentImageSection from "../components/ui/ContentImageSection";
import { aboutPageData } from "../data/about";

export default function About() {
  const navigate = useNavigate();
  const { hero, sections } = aboutPageData;

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        title={hero.title}
        subtitle={hero.subtitle}
        image={hero.image}
      />

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
          imagePosition={section.imagePosition as "left" | "right"}
          backgroundColor={section.backgroundColor}
          decorativeCircle={index % 2 === 0}
        />
      ))}
    </div>
  );
}

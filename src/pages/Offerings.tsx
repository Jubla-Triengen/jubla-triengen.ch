import { useNavigate } from "react-router-dom";
import { offerings } from "../data/offerings";
import PageHero from "../components/ui/PageHero";
import ContentImageSection from "../components/ui/ContentImageSection";
import { ArrowRight } from "lucide-react";
import PageDescription from "../components/ui/PageDescription";
import PageContent from "../components/ui/PageContent";
import { getPageConfig } from "../data/pages";

export default function Offerings() {
  const navigate = useNavigate();
  const page = getPageConfig("offerings");

  return (
    <div className="bg-white">
      {page.hero && <PageHero {...page.hero} />}

      <PageContent wide={true}>
        {page.description && <PageDescription {...page.description} />}

        <div className="flex flex-col">
          {offerings.map((offering, index) => (
            <ContentImageSection
              key={offering.id}
              title={offering.title}
              paragraphs={[offering.shortDescription]}
              image={{
                src: offering.image,
                alt: offering.title,
              }}
              imagePosition={index % 2 === 0 ? "right" : "left"}
              backgroundColor={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              button={{
                text: "Mehr erfahren",
                icon: ArrowRight,
                action: () => navigate(`/angebote/${offering.id}`),
              }}
              decorativeCircle={true}
            />
          ))}
        </div>
      </PageContent>
    </div>
  );
}

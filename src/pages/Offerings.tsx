import { useNavigate } from "react-router-dom";
import { offerings } from "../data/offerings";
import PageHero from "../components/ui/PageHero";
import ContentImageSection from "../components/ui/ContentImageSection";
import { ArrowRight } from "lucide-react";
import PageDescription from "../components/ui/PageDescription";
import PageContent from "../components/ui/PageContent";

export default function Offerings() {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      <PageHero
        image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80"
        title="Unsere Angebote"
        subtitle="Entdecke die Vielfalt der Jubla Triengen"
      />

      <PageContent wide={true}>
        <PageDescription
          title="Was wir bieten"
          description="Die Jubla Triengen bietet ein vielfältiges Programm für Kinder und Jugendliche. 
            Von wöchentlichen Gruppenstunden bis zu unvergesslichen Lagern ist für jeden etwas dabei.
            Tauche ein in unsere Welt und entdecke, was die Jubla so einzigartig macht."
        />

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

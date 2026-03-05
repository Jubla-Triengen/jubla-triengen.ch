import { useNavigate } from "react-router-dom";
import HeroSection from "../components/sections/HeroSection";
import FeatureCard from "../components/ui/FeatureCard";
import ContentImageSection from "../components/ui/ContentImageSection";
import CardSection from "../components/ui/CardSection";
import EventCard from "../components/ui/EventCard";
import NewsCard from "../components/ui/NewsCard";
import { Tent, Mountain, TreePine, ArrowRight } from "lucide-react";
import { activities } from "../data/activities";
import { posts } from "../data/posts";

const features = [
  {
    icon: Tent,
    title: "Gruppenstunden",
    subtitle: "Spiel & Spass",
    description:
      "Regelmässige Treffen voller Spiele, Kreativität und Gemeinschaft.",
  },
  {
    icon: Mountain,
    title: "Ferienlager",
    subtitle: "Lagerabenteuer",
    description:
      "Unvergessliche Wochen in der Natur mit Lagerfeuer und Abenteuer.",
  },
  {
    icon: TreePine,
    title: "Events & Anlässe",
    subtitle: "Gemeinsam erleben",
    description: "Besondere Aktivitäten und Feste durchs ganze Jahr.",
  },
];

const Home = () => {
  const navigate = useNavigate();

  const highlights = activities.slice(0, 3);

  const newsItems = posts.slice(0, 2);

  const welcomeContent = {
    id: "about",
    title: "Willkommen bei der Jubla Triengen",
    paragraphs: [
      "Die Jubla Triengen ist mehr als nur eine Jugendorganisation. Wir sind eine Gemeinschaft von Abenteurern, die gemeinsam die Natur entdecken, Freundschaften fürs Leben schliessen und unvergessliche Erinnerungen schaffen.",
      "Bei uns stehen Spass, Kreativität und das gemeinsame Erleben im Mittelpunkt. Ob bei wöchentlichen Gruppenstunden, aufregenden Ferienlagern oder besonderen Events – bei der Jubla ist für jedes Kind etwas dabei.",
    ],
    image: {
      src: "https://image.jimcdn.com/app/cms/image/transf/none/path/sb21156d07b64a771/image/iaadd36084aabac03/version/1741809698/image.jpg",
      alt: "Kinder beim Wandern",
    },
    button: {
      text: "Unsere Angebote",
      icon: ArrowRight,
      action: () => {
        navigate("/angebote");
      },
    },
  };

  return (
    <main>
      <HeroSection />
      <section className="relative -mt-20 z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                subtitle={feature.subtitle}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>
      <ContentImageSection {...welcomeContent} />
      <CardSection
        id="highlights"
        title="Unsere nächsten Highlights"
        orientation="horizontal"
        backgroundColor="white"
        button={{
          text: "Zum Programm",
          icon: ArrowRight,
          onClick: () => {navigate("/anlässe")}
        }}
      >
        {highlights.map((highlight) => (
          <EventCard
            key={highlight.id}
            id={highlight.id}
            image={highlight.image}
            title={highlight.title}
            date={highlight.date}
            description={highlight.shortDescription}
          />
        ))}
      </CardSection>
      <CardSection
        id="news"
        title="Neues aus der Jubla"
        orientation="vertical"
        backgroundColor="gradient"
        button={{
          text: "Zu den Neuigkeiten",
          icon: ArrowRight,
          onClick: () => {navigate("/posts")}
        }}
      >
        <div className="lg:col-span-full space-y-6">
          {newsItems.map((news) => (
            <NewsCard
              key={news.id}
              id={news.id}
              image={news.image}
              title={news.title}
              date={news.date}
              excerpt={news.shortDescription}
            />
          ))}
        </div>
      </CardSection>
    </main>
  );
};

export default Home;

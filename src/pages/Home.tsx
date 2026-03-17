import { useNavigate } from "react-router-dom";
import HeroSection from "../components/sections/HeroSection";
import FeatureCard from "../components/ui/FeatureCard";
import ContentImageSection from "../components/ui/ContentImageSection";
import CardSection from "../components/ui/CardSection";
import EventCard from "../components/ui/EventCard";
import NewsCard from "../components/ui/NewsCard";
import { ArrowRight } from "lucide-react";
import { activities } from "../data/activities";
import { posts } from "../data/posts";
import { homeFeatures, homeWelcomeContent } from "../data/home";

const Home = () => {
  const navigate = useNavigate();

  const highlights = activities.slice(0, 3);

  const newsItems = posts.slice(0, 2);

  return (
    <main>
      <HeroSection />
      <section className="relative -mt-20 z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {homeFeatures.map((feature, index) => (
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
      <ContentImageSection
        {...homeWelcomeContent}
        button={{
          text: homeWelcomeContent.button.text,
          icon: ArrowRight,
          action: () => {
            navigate(homeWelcomeContent.button.link);
          },
        }}
      />
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

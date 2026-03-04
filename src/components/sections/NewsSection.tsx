import NewsCard from '../ui/NewsCard';
import CardSection from '../ui/CardSection';
import { ArrowRight } from 'lucide-react';

const newsItems = [
  {
    image: 'https://images.pexels.com/photos/1250452/pexels-photo-1250452.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Sommerlager 2024',
    date: '15. März 2024',
    excerpt: 'Die Anmeldung für unser Sommerlager ist jetzt offen! Sichert euch schnell einen Platz.',
  },
  {
    image: 'https://images.pexels.com/photos/1319572/pexels-photo-1319572.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Neuer Vorstand gewählt',
    date: '8. März 2024',
    excerpt: 'An unserer Generalversammlung wurde ein neues Leitungsteam gewählt.',
  },
];

export default function NewsSection() {
  return (
    <CardSection
      id="news"
      title="Neues aus der Jubla"
      orientation="vertical"
      backgroundColor="gradient"
      button={{
        text: 'Zum den Neuigkeiten',
        icon: ArrowRight,
      }}
    >
      <div className="lg:col-span-full space-y-6">
        {newsItems.map((news, index) => (
          <NewsCard
            key={index}
            image={news.image}
            title={news.title}
            date={news.date}
            excerpt={news.excerpt}
          />
        ))}
      </div>
    </CardSection>
  );
}

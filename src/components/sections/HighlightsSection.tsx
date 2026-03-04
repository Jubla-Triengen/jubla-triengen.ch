import EventCard from '../ui/EventCard';
import CardSection from '../ui/CardSection';
import { ArrowRight } from 'lucide-react';

const highlights = [
  {
    image: 'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Pfingstlager',
    date: '17. - 21. Mai 2024',
    description: 'Eine Woche voller Abenteuer im Wald.',
  },
  {
    image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Waldtag',
    date: '15. Juni 2024',
    description: 'Gemeinsam die Natur entdecken und erleben.',
  },
  {
    image: 'https://images.pexels.com/photos/2403251/pexels-photo-2403251.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Herbstfest',
    date: '28. September 2024',
    description: 'Feier mit der ganzen Jubla Triengen.',
  },
];

export default function HighlightsSection() {
  return (
    <CardSection
      id="highlights"
      title="Unsere nächsten Highlights"
      orientation="horizontal"
      backgroundColor="white"
      button={{
        text: 'Zum Programm',
        icon: ArrowRight,
      }}
    >
      {highlights.map((highlight, index) => (
        <EventCard
          key={index}
          image={highlight.image}
          title={highlight.title}
          date={highlight.date}
          description={highlight.description}
        />
      ))}
    </CardSection>
  );
}

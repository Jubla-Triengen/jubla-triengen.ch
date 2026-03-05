import { activities } from "../data/activities";
import EventCard from "../components/ui/EventCard";
import PageHero from "../components/ui/PageHero";
import PageDescription from "../components/ui/PageDescription";
import PageContent from "../components/ui/PageContent";
import SearchableCardGrid from "../components/ui/SearchableCardGrid";

export default function Activities() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        image="https://images.unsplash.com/photo-1502086223501-681a6a508d52?auto=format&fit=crop&q=80"
        title="Jahres Programm"
      />
      <PageContent>
        <PageDescription
          title="Unsere Aktivitäten"
          description="Entdecke unser vielfältiges Jahresprogramm voller spannender Aktivitäten, die für jedes Alter und Interesse etwas bieten. Von actionreichen Outdoor-Abenteuern über kreative Workshops bis hin zu gemütlichen Lagerfeuerabenden – bei uns ist immer etwas los!"
        />

        <SearchableCardGrid
          items={activities}
          getItemKey={(activity) => activity.id}
          getSearchValues={(activity) => [
            activity.id,
            activity.title,
            activity.date,
            activity.shortDescription,
            ...activity.attachments.map((attachment) => attachment.name),
          ]}
          searchPlaceholder="Aktivität suchen..."
          emptyResultsText="Keine passenden Aktivitäten gefunden."
          renderCard={(activity) => (
            <EventCard
              key={activity.id}
              id={activity.id}
              image={activity.image}
              title={activity.title}
              date={activity.date}
              description={activity.shortDescription}
            />
          )}
        />
      </PageContent>
    </div>
  );
}

import PageHero from "../../components/ui/PageHero";
import PageDescription from "../../components/ui/PageDescription";
import PageContent from "../../components/ui/PageContent";
import SearchableCardGrid from "../../components/ui/SearchableCardGrid";
import EventCard from "../../components/ui/EventCard";
import { useCmsData, useCmsPage } from "../context";

export default function ActivitiesTemplate() {
  const data = useCmsData();
  const page = useCmsPage("activities");

  return (
    <div className="min-h-screen bg-gray-50">
      {page?.hero && <PageHero {...page.hero} />}
      <PageContent>
        {page?.description && <PageDescription {...page.description} />}

        <SearchableCardGrid
          items={data.activities}
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

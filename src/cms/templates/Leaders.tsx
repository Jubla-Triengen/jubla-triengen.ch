import PageHero from "../../components/ui/PageHero";
import PageDescription from "../../components/ui/PageDescription";
import PageContent from "../../components/ui/PageContent";
import SearchableCardGrid from "../../components/ui/SearchableCardGrid";
import LeaderCard from "../../components/ui/LeaderCard";
import { useCmsData, useCmsPage } from "../context";

export default function LeadersTemplate() {
  const data = useCmsData();
  const page = useCmsPage("leaders");

  return (
    <div className="min-h-screen bg-gray-50">
      {page?.hero && <PageHero {...page.hero} />}
      <PageContent>
        {page?.description && <PageDescription {...page.description} />}
        <SearchableCardGrid
          items={data.leaders}
          getItemKey={(leader) => leader.id}
          getSearchValues={(leader) => [
            leader.name,
            leader.nickname,
            leader.role,
            leader.email,
            leader.phone,
          ]}
          searchPlaceholder="Leitungsperson suchen..."
          emptyResultsText="Keine passenden Leitungspersonen gefunden."
          renderCard={(leader) => (
            <LeaderCard
              id={leader.id}
              image={leader.image}
              name={leader.name}
              role={leader.role}
              description={leader.description}
            />
          )}
        />
      </PageContent>
    </div>
  );
}

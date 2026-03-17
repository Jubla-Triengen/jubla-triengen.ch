import PageHero from "../components/ui/PageHero";
import PageDescription from "../components/ui/PageDescription";
import PageContent from "../components/ui/PageContent";
import SearchableCardGrid from "../components/ui/SearchableCardGrid";
import LeaderCard from "../components/ui/LeaderCard";
import { leaders } from "../data/leaders";
import { getPageConfig } from "../data/pages";

export default function Leaders() {
  const page = getPageConfig("leaders");

  return (
    <div className="min-h-screen bg-gray-50">
      {page.hero && <PageHero {...page.hero} />}
      <PageContent>
        {page.description && <PageDescription {...page.description} />}
        <SearchableCardGrid
          items={leaders}
          getItemKey={(leader) => leader.id}
          getSearchValues={(leader) => [
            leader.name,
            leader.nickname,
            leader.role,
            leader.email,
            leader.phone,
            leader.birthday,
            leader.courses,
            leader.jublaRoles,
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

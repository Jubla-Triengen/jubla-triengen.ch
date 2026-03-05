import PageHero from "../components/ui/PageHero";
import PageDescription from "../components/ui/PageDescription";
import PageContent from "../components/ui/PageContent";
import SearchableCardGrid from "../components/ui/SearchableCardGrid";
import LeaderCard from "../components/ui/LeaderCard";
import { leaders } from "../data/leaders";

export default function Leaders() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        image="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
        title="Unser Leitungsteam"
        subtitle="Gemeinsam für unvergessliche Erlebnisse"
      />
      <PageContent>
        <PageDescription
          title="Wer wir sind"
          description="Das Herzstück der Jubla Triengen sind unsere freiwilligen Leiterinnen und Leiter. Sie planen und führen Gruppenstunden, Scharanlässe und Lager durch – mit viel Herzblut und ehrenamtlichem Engagement."
        />
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

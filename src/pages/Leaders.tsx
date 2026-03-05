
import { Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import PageHero from '../components/ui/PageHero';
import PageDescription from '../components/ui/PageDescription';
import PageContent from '../components/ui/PageContent';
import SearchableCardGrid from '../components/ui/SearchableCardGrid';
import { leaders } from '../data/leaders';

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
            <Link 
              to={`/leaders/${leader.id}`} 
              className="block h-full group"
            >
              <div className="h-full transition-transform duration-300 group-hover:-translate-y-2">
                <Card
                  image={leader.image}
                  title={leader.name}
                  subtitle={
                    <span className="text-jubla-blue font-medium uppercase tracking-wider text-sm">
                      {leader.role}
                    </span>
                  }
                >
                  {leader.description}
                </Card>
              </div>
            </Link>
          )}
        />
      </PageContent>
    </div>
  );
}

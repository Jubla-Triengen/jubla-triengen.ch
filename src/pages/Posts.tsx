import { posts } from "../data/posts";
import PageHero from "../components/ui/PageHero";
import PageDescription from "../components/ui/PageDescription";
import PageContent from "../components/ui/PageContent";
import SearchableCardGrid from "../components/ui/SearchableCardGrid";
import NewsCard from "../components/ui/NewsCard";

export default function Posts() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        image="https://images.unsplash.com/photo-1502086223501-681a6a508d52?auto=format&fit=crop&q=80"
        title="Aktuelles"
      />
      <PageContent>
        <PageDescription
          title="Neuigkeiten aus der Schar"
          description="Hier findest du Berichte über vergangene Anlässe, wichtige Informationen und Neuigkeiten."
        />
        <SearchableCardGrid
          items={posts}
          gridClassName=""
          getItemKey={(post) => post.id}
          getSearchValues={(post) => [
            post.title,
            post.date,
            post.shortDescription,
            ...post.attachments.map((attachment) => attachment.name),
          ]}
          searchPlaceholder="Beitrag suchen..."
          emptyResultsText="Keine passenden Beiträge gefunden."
          renderCard={(post) => (
            <NewsCard
              key={post.id}
              id={post.id}
              image={post.image}
              title={post.title}
              date={post.date}
              excerpt={post.shortDescription}
            />
          )}
        />
      </PageContent>
    </div>
  );
}

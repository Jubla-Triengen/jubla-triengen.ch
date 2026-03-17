import { posts } from "../data/posts";
import PageHero from "../components/ui/PageHero";
import PageDescription from "../components/ui/PageDescription";
import PageContent from "../components/ui/PageContent";
import SearchableCardGrid from "../components/ui/SearchableCardGrid";
import NewsCard from "../components/ui/NewsCard";
import { getPageConfig } from "../data/pages";

export default function Posts() {
  const page = getPageConfig("posts");

  return (
    <div className="min-h-screen bg-gray-50">
      {page.hero && <PageHero {...page.hero} />}
      <PageContent>
        {page.description && <PageDescription {...page.description} />}
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

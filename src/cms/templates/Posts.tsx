import PageHero from "../../components/ui/PageHero";
import PageDescription from "../../components/ui/PageDescription";
import PageContent from "../../components/ui/PageContent";
import SearchableCardGrid from "../../components/ui/SearchableCardGrid";
import NewsCard from "../../components/ui/NewsCard";
import { useCmsData, useCmsPage } from "../context";

export default function PostsTemplate() {
  const data = useCmsData();
  const page = useCmsPage("posts");

  return (
    <div className="min-h-screen bg-gray-50">
      {page?.hero && <PageHero {...page.hero} />}
      <PageContent>
        {page?.description && <PageDescription {...page.description} />}
        <SearchableCardGrid
          items={data.posts}
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

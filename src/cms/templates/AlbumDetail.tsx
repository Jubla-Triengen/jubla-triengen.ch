import { useParams, useNavigate } from "react-router-dom";
import PageHero from "../../components/ui/PageHero";
import Masonry from "../../components/ui/Masonry";
import { ArrowLeft } from "lucide-react";
import { useCmsData, useCmsPage } from "../context";

interface AlbumDetailMeta {
  notFoundTitle?: string;
  backLabel?: string;
}

export default function AlbumDetailTemplate() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const data = useCmsData();
  const page = useCmsPage("album_detail");
  const meta = (page?.meta ?? {}) as AlbumDetailMeta;

  if (!id) return <div>{meta.notFoundTitle}</div>;

  const items = data.photos.filter((photo) => photo.albumId === id);
  const hero = page?.hero;

  return (
    <div className="min-h-screen bg-gray-50">
      {hero && (
        <PageHero
          title={id.replace("-", " ")}
          subtitle={hero.subtitle}
          image={items[0]?.img ?? hero.image}
        />
      )}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <button
          onClick={() => navigate("/galerie")}
          className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> {meta.backLabel}
        </button>

        <div className="h-screen w-full">
          <Masonry
            items={items}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover
            hoverScale={0.95}
            blurToFocus
            colorShiftOnHover={false}
          />
        </div>
      </div>
    </div>
  );
}

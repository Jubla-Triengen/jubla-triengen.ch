import { useParams, useNavigate } from "react-router-dom";
import Masonry from "../components/ui/Masonry";
import { ArrowLeft } from "lucide-react";
import PageHero from "../components/ui/PageHero";

const getAlbumPhotos = (albumId: string) => {
  return Array.from({ length: 12 }).map((_, i) => ({
    id: `${albumId}-${i}`,
    img: `https://picsum.photos/seed/${albumId}${i}/600/${
      Math.floor(Math.random() * 300) + 300
    }?grayscale`,
    url: `https://picsum.photos/seed/${albumId}${i}/1200/800`, // Full size image url
    height: Math.floor(Math.random() * 300) + 300,
  }));
};

export default function AlbumDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  if (!id) return <div>Album not found</div>;

  const items = getAlbumPhotos(id);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        title={id.replace("-", " ")}
        subtitle="Explore our photo album"
        image={items[0].img}
      />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <button
          onClick={() => navigate("/gallery")}
          className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Gallery
        </button>

        <div className="h-screen w-full">
          {" "}
          {/* Masonry container needs height */}
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

import CircularGallery from "../components/ui/CircularGallery";
import { useNavigate } from "react-router-dom";
import PageHero from "../components/ui/PageHero";

const albums = [
  {
    image: "https://picsum.photos/seed/1/800/600?grayscale",
    text: "Summer Camp 2023",
    id: "summer-2023",
  },
  {
    image: "https://picsum.photos/seed/2/800/600?grayscale",
    text: "Winter Skiing",
    id: "winter-skiing",
  },
  {
    image: "https://picsum.photos/seed/3/800/600?grayscale",
    text: "Charity Run",
    id: "charity-run",
  },
  {
    image: "https://picsum.photos/seed/4/800/600?grayscale",
    text: "Forest Adventure",
    id: "forest-adventure",
  },
  {
    image: "https://picsum.photos/seed/5/800/600?grayscale",
    text: "City Trip",
    id: "city-trip",
  },
];

export default function Gallery() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full bg-[#111] relative">
      <PageHero
        title="Foto Gallerie"
        subtitle="Erleben Sie die Abenteuer unserer Jugendgruppe durch unsere Fotogalerie"
        image="https://picsum.photos/seed/hero/1200/400?grayscale"
      />
      <div className="w-full h-[60vh] ">
        <CircularGallery
          items={albums}
          bend={3}
          textColor="#F3C518"
          backgroundColor="#FFFFFF"
          font="40px Amatic SC"
          borderRadius={0.05}
          scrollEase={0.05}
          onClick={(index) => {
            const album = albums[index];
            if (album) {
              navigate(`/gallery/${album.id}`);
            }
          }}
        />
      </div>
    </div>
  );
}

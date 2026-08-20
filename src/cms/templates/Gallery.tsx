import { useNavigate } from "react-router-dom";
import PageHero from "../../components/ui/PageHero";
import CircularGallery from "../../components/ui/CircularGallery";
import { useCmsData, useCmsPage } from "../context";

export default function GalleryTemplate() {
  const navigate = useNavigate();
  const data = useCmsData();
  const page = useCmsPage("gallery");

  return (
    <div className="w-full h-full bg-[#111] relative">
      {page?.hero && <PageHero {...page.hero} />}
      <div className="w-full h-[60vh] ">
        <CircularGallery
          items={data.albums.map((album) => ({
            image: album.image,
            text: album.title,
          }))}
          bend={3}
          textColor="#F3C518"
          backgroundColor="#FFFFFF"
          font="40px Amatic SC"
          borderRadius={0.05}
          scrollEase={0.05}
          onClick={(index) => {
            const album = data.albums[index];
            if (album) {
              navigate(`/galerie/${album.id}`);
            }
          }}
        />
      </div>
    </div>
  );
}

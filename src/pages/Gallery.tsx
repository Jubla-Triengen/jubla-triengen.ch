import CircularGallery from "../components/ui/CircularGallery";
import { useNavigate } from "react-router-dom";
import PageHero from "../components/ui/PageHero";
import { galleryAlbums } from "../data/gallery";
import { getPageConfig } from "../data/pages";

export default function Gallery() {
  const navigate = useNavigate();
  const page = getPageConfig("gallery");

  return (
    <div className="w-full h-full bg-[#111] relative">
      {page.hero && <PageHero {...page.hero} />}
      <div className="w-full h-[60vh] ">
        <CircularGallery
          items={galleryAlbums}
          bend={3}
          textColor="#F3C518"
          backgroundColor="#FFFFFF"
          font="40px Amatic SC"
          borderRadius={0.05}
          scrollEase={0.05}
          onClick={(index) => {
            const album = galleryAlbums[index];
            if (album) {
              navigate(`/galerie/${album.id}`);
            }
          }}
        />
      </div>
    </div>
  );
}

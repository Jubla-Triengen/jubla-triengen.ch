import SectionTitle from "./SectionTitle";
import SectionText from "./SectionText";

interface PageHeroProps {
  image: string;
  title?: string;
  subtitle?: string;
}

export default function PageHero({ image, title, subtitle }: PageHeroProps) {
  return (
    <div className="relative h-[40vh] min-h-[300px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center text-white">
        {title && <SectionTitle className="text-white">{title}</SectionTitle>}
        {subtitle && (
          <SectionText className="text-white mt-4">{subtitle}</SectionText>
        )}
      </div>
    </div>
  );
}

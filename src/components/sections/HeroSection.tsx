import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url(https://image.jimcdn.com/cdn-cgi/image//app/cms/storage/image/path/sb21156d07b64a771/backgroundarea/ib36b1240ebbc0855/version/1556893189/image.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-amatic text-7xl sm:text-8xl lg:text-9xl font-bold text-white leading-tight mb-6">
            Abenteuer.
            <br />
            Freundschaft.
            <br />
            Lagerleben.
          </h1>
          <p className="font-mundial font-light text-xl sm:text-2xl text-gray-200 mb-8 max-w-2xl">
            Erlebe unvergessliche Momente in der Natur mit der Jubla Triengen.
          </p>
          <Button onClick={() => scrollToSection("about")} icon={ArrowRight}>
            Mehr erfahren
          </Button>
        </div>
      </div>
    </section>
  );
}

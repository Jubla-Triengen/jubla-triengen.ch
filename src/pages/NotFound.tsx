import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Button from "../components/ui/Button";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url(https://image.jimcdn.com/cdn-cgi/image//app/cms/storage/image/path/sb21156d07b64a771/backgroundarea/ib36b1240ebbc0855/version/1556893189/image.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(100%)", // Make it distinct from home
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-amatic text-9xl font-bold text-jubla-yellow mb-4">
            404
          </h1>
          <h2 className="font-amatic text-5xl sm:text-6xl font-bold text-white mb-8">
            Uups! Diese Seite haben wir wohl im Wald verloren.
          </h2>
          <p className="font-mundial font-light text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
            Vielleicht hast du dich verlaufen? Keine Sorge, im Lager finden wir
            immer einen Weg zurück.
          </p>
          <div className="flex justify-center">
            <Button
              onClick={() => navigate("/")}
              icon={ArrowLeft}
              iconPosition="left"
            >
              Zurück zur Startseite
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

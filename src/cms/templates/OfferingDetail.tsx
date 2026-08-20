import { useParams, Link } from "react-router-dom";
import DetailPageLayout from "../../components/ui/DetailPageLayout";
import { useCmsData, useCmsPage } from "../context";

interface OfferingDetailMeta {
  notFoundTitle?: string;
  backLabel?: string;
}

export default function OfferingDetailTemplate() {
  const { id } = useParams<{ id: string }>();
  const data = useCmsData();
  const page = useCmsPage("offering_detail");
  const meta = (page?.meta ?? {}) as OfferingDetailMeta;

  const offering = data.offerings.find((entry) => entry.id === id);

  if (!offering) {
    return (
      <div className="min-h-screen pt-32 pb-16 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">{meta.notFoundTitle}</h2>
        <Link to="/angebote" className="text-blue-600 hover:underline">
          {meta.backLabel}
        </Link>
      </div>
    );
  }

  return (
    <DetailPageLayout
      hero={{
        image: offering.image || page?.hero?.image || "",
        title: offering.title,
        subtitle: page?.hero?.subtitle,
      }}
      backLink={{
        to: "/angebote",
        label: meta.backLabel ?? "",
      }}
    >
      <p className="text-xl md:text-2xl font-medium text-gray-800 mb-8 leading-relaxed">
        {offering.shortDescription}
      </p>

      <div className="prose prose-lg max-w-none text-gray-600 mb-12 whitespace-pre-line">
        {offering.longDescription}
      </div>
    </DetailPageLayout>
  );
}

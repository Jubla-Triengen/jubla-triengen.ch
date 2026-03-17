import { useParams, Link } from "react-router-dom";
import { offerings } from "../data/offerings";
import DetailPageLayout from "../components/ui/DetailPageLayout";
import { offeringDetailContent } from "../data/offeringDetail";
import { getPageConfig } from "../data/pages";

export default function OfferingDetail() {
  const { id } = useParams<{ id: string }>();
  const offering = offerings.find((o) => o.id === id);
  const page = getPageConfig("offeringDetail");

  if (!offering) {
    return (
      <div className="min-h-screen pt-32 pb-16 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">
          {offeringDetailContent.notFoundTitle}
        </h2>
        <Link to="/angebote" className="text-blue-600 hover:underline">
          {offeringDetailContent.backLabel}
        </Link>
      </div>
    );
  }

  return (
    <DetailPageLayout
      hero={{
        image: offering.image || page.hero?.image || "",
        title: offering.title,
        subtitle: page.hero?.subtitle,
      }}
      backLink={{
        to: "/angebote",
        label: offeringDetailContent.backLabel,
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

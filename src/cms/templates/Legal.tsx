import LegalPageLayout from "../../components/ui/LegalPageLayout";
import { useCmsData, useCmsPage } from "../context";

interface LegalTemplateProps {
  pageKey: string;
}

export default function LegalTemplate({ pageKey }: LegalTemplateProps) {
  const data = useCmsData();
  const page = useCmsPage(pageKey);

  if (!page?.hero) {
    return null;
  }

  const sections = data.legalSections
    .filter((section) => section.pageKey === pageKey)
    .map((section) => ({
      title: section.title,
      content: section.content,
    }));

  return (
    <LegalPageLayout
      hero={page.hero}
      data={{
        lastUpdated:
          typeof page.meta.lastUpdated === "string"
            ? page.meta.lastUpdated
            : undefined,
        sections,
      }}
    />
  );
}

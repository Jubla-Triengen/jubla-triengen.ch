import { useCmsSections } from "../context";
import SectionRenderer from "../sections";

export default function HomeTemplate() {
  const sections = useCmsSections("home");

  return (
    <main>
      <SectionRenderer sections={sections} />
    </main>
  );
}

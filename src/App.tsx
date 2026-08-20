import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import ScrollToTop from "./components/ui/ScrollToTop";
import ClickSpark from "./components/ui/ClickSpark";
import AppRoutes from "./cms/routes";

export default function App() {
  return (
    <ClickSpark>
      <ScrollToTop />
      <div className="min-h-screen">
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </ClickSpark>
  );
}

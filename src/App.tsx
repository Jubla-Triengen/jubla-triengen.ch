import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import ScrollToTop from "./components/ui/ScrollToTop";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Leaders from "./pages/Leaders";
import LeaderDetail from "./pages/LeaderDetail";
import Activities from "./pages/Activities";
import ActivityDetail from "./pages/ActivityDetail";
import Offerings from "./pages/Offerings";
import OfferingDetail from "./pages/OfferingDetail";
import Posts from "./pages/Posts";
import PostDetail from "./pages/PostDetail";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import AlbumDetail from "./pages/AlbumDetail";
import Contact from "./pages/Contact";
import Impressum from "./pages/Impressum";
import DataProtection from "./pages/DataProtection";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/über-uns" element={<About />} />
          <Route path="/leiter" element={<Leaders />} />
          <Route path="/leiter/:id" element={<LeaderDetail />} />
          <Route path="/anlässe" element={<Activities />} />
          <Route path="/anlässe/:id" element={<ActivityDetail />} />
          <Route path="/angebote" element={<Offerings />} />
          <Route path="/angebote/:id" element={<OfferingDetail />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/galerie" element={<Gallery />} />
          <Route path="/galerie/:id" element={<AlbumDetail />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<DataProtection />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

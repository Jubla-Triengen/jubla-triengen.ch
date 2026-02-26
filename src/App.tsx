import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Leaders from './pages/Leaders';
import LeaderDetail from './pages/LeaderDetail';
import Activities from './pages/Activities';
import ActivityDetail from './pages/ActivityDetail';
import Posts from './pages/Posts';
import PostDetail from './pages/PostDetail';
import About from './pages/About';
import Gallery from './pages/Gallery';
import AlbumDetail from './pages/AlbumDetail';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/leaders" element={<Leaders />} />
          <Route path="/leaders/:id" element={<LeaderDetail />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/activities/:id" element={<ActivityDetail />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:id" element={<AlbumDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

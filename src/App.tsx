import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { EngagementPartyPage } from './pages/EngagementPartyPage';
import { RSVPPage } from './pages/RSVPPage';
import { GiftsPage } from './pages/GiftsPage';
import { UploadPage } from './pages/UploadPage';
import { GalleryPage } from './pages/GalleryPage';
import { StoryPage } from './pages/StoryPage';
import { FAQPage } from './pages/FAQPage';
import { GuestbookPage } from './pages/GuestbookPage';
import { PortalPage } from './pages/PortalPage';
import { AdminPage } from './pages/AdminPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/engagement-party" element={<EngagementPartyPage />} />
            <Route path="/rsvp" element={<RSVPPage />} />
            <Route path="/gifts" element={<GiftsPage />} />
            <Route path="/upload" element={<UploadPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/our-story" element={<StoryPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/guestbook" element={<GuestbookPage />} />
            <Route path="/portal" element={<PortalPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

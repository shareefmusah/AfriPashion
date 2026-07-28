import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import BackToTop from "./components/BackToTop.jsx";
import PageTransition from "./components/PageTransition.jsx";
import Home from "./pages/Home.jsx";
import Collections from "./pages/Collections.jsx";
import Craft from "./pages/Craft.jsx";
import Process from "./pages/Process.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  const location = useLocation();

  return (
    <div className="font-body min-h-screen bg-cream text-ink">
      <Header />
      <main>
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/collections" element={<Collections />} />
              <Route path="/craft" element={<Craft />} />
              <Route path="/process" element={<Process />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </PageTransition>
        </AnimatePresence>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

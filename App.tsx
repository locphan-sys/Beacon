
import React, { useState } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import USImmigration from "./pages/USImmigration";

// ScrollToTop component to ensure page starts at top on navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppContent: React.FC = () => {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const { t } = useLanguage();

  const openModal = () => setIsConsultationModalOpen(true);
  const closeModal = () => setIsConsultationModalOpen(false);

  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/events" element={<Events />} />
            <Route path="/programs/us" element={<USImmigration />} />
          </Routes>
        </main>
        <Footer onOpenConsultation={openModal} />

        {/* Global Consultation Modal */}
        {isConsultationModalOpen && (
          <div 
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300"
            onClick={closeModal}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
            <div 
              className="relative bg-white w-full max-w-xl overflow-hidden rounded-2xl shadow-2xl animate-in zoom-in-95 duration-300 border border-gray-100"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={closeModal}
                className="absolute top-5 right-5 text-gray-400 hover:text-primary transition-colors z-10"
              >
                <span className="material-symbols-outlined text-3xl">close</span>
              </button>

              <div className="p-8 md:p-12">
                <div className="text-center mb-10">
                  <h2 className="font-display text-2xl font-black text-secondary uppercase tracking-[0.2em] mb-2">
                    {t.common.contact}
                  </h2>
                  <div className="w-16 h-1 bg-primary mx-auto"></div>
                  <p className="text-gray-500 text-sm font-sans mt-4">
                    {t.header.topBarText}
                  </p>
                </div>

                <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert(t.common.success); closeModal(); }}>
                  <div className="space-y-4">
                    <div className="relative">
                      <input
                        required
                        type="text"
                        placeholder={t.common.namePlaceholder}
                        className="w-full p-4 pl-12 bg-gray-50 border border-gray-200 focus:border-primary focus:bg-white outline-none transition rounded-xl font-sans text-sm"
                      />
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">person</span>
                    </div>

                    <div className="relative">
                      <input
                        required
                        type="email"
                        placeholder={t.common.emailPlaceholder}
                        className="w-full p-4 pl-12 bg-gray-50 border border-gray-200 focus:border-primary focus:bg-white outline-none transition rounded-xl font-sans text-sm"
                      />
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">mail</span>
                    </div>

                    <div className="relative">
                      <input
                        required
                        type="tel"
                        placeholder={t.common.phonePlaceholder}
                        className="w-full p-4 pl-12 bg-gray-50 border border-gray-200 focus:border-primary focus:bg-white outline-none transition rounded-xl font-sans text-sm"
                      />
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">call</span>
                    </div>

                    <div className="relative">
                      <select required className="w-full p-4 pl-12 bg-gray-50 border border-gray-200 text-gray-500 focus:border-primary focus:bg-white outline-none transition rounded-xl font-sans text-sm appearance-none">
                        <option value="">{t.common.programInterest}</option>
                        <option>Europe</option>
                        <option>USA / Canada</option>
                        <option>Asia</option>
                      </select>
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">flag</span>
                      <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">expand_more</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-secondary font-black py-5 hover:bg-secondary hover:text-white transition-all duration-300 tracking-[0.3em] uppercase shadow-xl rounded-xl mt-6 text-sm"
                  >
                    {t.common.submit}
                  </button>
                  
                  <p className="text-[10px] text-center text-gray-400 uppercase tracking-widest mt-4">
                    {t.common.secureInfo}
                  </p>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <AppContent />
      </Router>
    </LanguageProvider>
  );
};

export default App;

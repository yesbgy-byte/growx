import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import TrendAnalysis from './components/TrendAnalysis';
import Methodology from './components/Methodology';
import Curriculum from './components/Curriculum';
import AssessmentSystem from './components/AssessmentSystem';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SampleReport from './components/SampleReport';

const App: React.FC = () => {
  const [showStickyNav, setShowStickyNav] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'report'>('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowStickyNav(true);
      } else {
        setShowStickyNav(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToHome = () => {
    setCurrentView('home');
    window.scrollTo(0, 0);
  };

  const navigateToReport = () => {
    setCurrentView('report');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${showStickyNav || currentView === 'report' ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div
            className={`font-extrabold text-2xl tracking-tighter cursor-pointer ${showStickyNav || currentView === 'report' ? 'text-slate-900' : 'text-white'}`}
            onClick={navigateToHome}
          >
            GROWX
          </div>
          <div className="flex gap-4 items-center">
            {currentView === 'report' && (
              <button
                onClick={navigateToHome}
                className="text-sm font-semibold text-slate-600 hover:text-orange-600 transition hidden md:block"
              >
                메인으로 돌아가기
              </button>
            )}
            <a href="#contact" className={`px-5 py-2 rounded-full font-bold text-sm transition-all ${showStickyNav || currentView === 'report'
                ? 'bg-orange-600 text-white hover:bg-orange-700'
                : 'bg-white/20 text-white border border-white/30 hover:bg-white/30'
              }`}>
              도입 문의
            </a>
          </div>
        </div>
      </nav>

      {currentView === 'home' ? (
        <>
          <Hero onNavigateToReport={navigateToReport} />
          <TrendAnalysis />
          <Methodology />
          <Curriculum />
          <AssessmentSystem />
          <Contact />
        </>
      ) : (
        <SampleReport onBack={navigateToHome} />
      )}

      <Footer />
    </div>
  );
};

export default App;
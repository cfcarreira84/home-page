'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Navbar from './components/Navbar';
import SplashScreen from './components/SplashScreen';
import HeroSlider from './components/HeroSlider';
import { categoryTheme } from './components/FilterGrid';

// Lazy loading the heavy components below the fold
const FilterGrid = dynamic(() => import('./components/FilterGrid'), { ssr: false });
const AboutSection = dynamic(() => import('./components/AboutSection'), { ssr: false });
const AgentTerminal = dynamic(() => import('./components/AgentTerminal'), { ssr: false });
const Footer = dynamic(() => import('./components/Footer'), { ssr: false });

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeFilter, setActiveFilter] = useState("ALL");
  const theme = categoryTheme[activeFilter];

  useEffect(() => {
    // Se a splash já foi exibida na sessão, não exibe novamente
    if (typeof window !== 'undefined') {
      const splashShown = sessionStorage.getItem('splash_shown');
      if (splashShown) {
        setShowSplash(false);
      }
    }
  }, []);

  const handleSplashComplete = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('splash_shown', 'true');
      document.documentElement.classList.add('splash-already-shown');
    }
    setShowSplash(false);
  };

  return (
    <main className="min-h-screen relative bg-cosmos-base overflow-x-hidden">
      <AnimatePresence mode="wait">
        {showSplash && (
          <SplashScreen key="splash" onComplete={handleSplashComplete} />
        )}
      </AnimatePresence>

      {!showSplash && <Navbar />}

      <div className="flex flex-col relative z-0">
        <HeroSlider isSplashActive={showSplash} />
        
        {/* Fundo Global Controlado pelo Filtro */}
        <motion.div 
            initial={{ backgroundColor: theme.bg }}
            animate={{ backgroundColor: theme.bg }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex flex-col w-full"
        >
          <FilterGrid 
            activeFilter={activeFilter} 
            setActiveFilter={setActiveFilter} 
            theme={theme} 
          />
          <AboutSection theme={theme} />
          <AgentTerminal theme={theme} />
          <Footer theme={theme} />
        </motion.div>
      </div>

    </main>
  );
}
'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import SplashScreen from './components/SplashScreen';
import HeroSlider from './components/HeroSlider';
import FilterGrid, { categoryTheme } from './components/FilterGrid';
import AboutSection from './components/AboutSection';
import AgentTerminal from './components/AgentTerminal';
import Footer from './components/Footer';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeFilter, setActiveFilter] = useState("ALL");
  const theme = categoryTheme[activeFilter];

  return (
    <main className="min-h-screen relative bg-cosmos-base overflow-x-hidden">
      <Navbar />

      <AnimatePresence mode="wait">
        {showSplash && (
          <SplashScreen key="splash" onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

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
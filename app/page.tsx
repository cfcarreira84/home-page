'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SplashScreen from './components/SplashScreen';
import HeroSlider from './components/HeroSlider';
import FilterGrid from './components/FilterGrid';
import AboutSection from './components/AboutSection';
import AgentTerminal from './components/AgentTerminal'; // <-- Nova importação
import Footer from './components/Footer'; // <-- Nova importação

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <main className="min-h-screen relative bg-cosmos-base">

      <AnimatePresence>
        {showSplash && (
          <SplashScreen onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      {!showSplash && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col"
        >
          <HeroSlider />
          <FilterGrid />
          <AboutSection />
          <AgentTerminal /> {/* <-- Adicionado */}
          <Footer /> {/* <-- Adicionado */}
        </motion.div>
      )}

    </main>
  );
}
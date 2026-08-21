'use client'; // Necessário para o Framer Motion funcionar no Next.js

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
    const [currentSubtitle, setCurrentSubtitle] = useState(0);
    const subtitles = [
        "Revenue Engineer",
        "Data Intelligence",
        "AI Operations",
        "Menos slides. Mais vendas."
    ];

    // Lógica para alternar as legendas dinamicamente
    useEffect(() => {
        if (currentSubtitle < subtitles.length - 1) {
            const timer = setTimeout(() => setCurrentSubtitle(prev => prev + 1), 1200);
            return () => clearTimeout(timer);
        } else {
            // Quando chegar na última frase, aciona o fim da Splash Screen após 1.5s
            const finishTimer = setTimeout(onComplete, 1500);
            return () => clearTimeout(finishTimer);
        }
    }, [currentSubtitle, onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-cosmos-base overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }} // A máscara de saída elegante
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            {/* O nome em destaque */}
            <motion.h1
                className="font-display text-5xl md:text-7xl font-bold text-cosmos-title tracking-tight mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                CARLOS F. CARREIRA
            </motion.h1>

            {/* O Subtítulo Dinâmico (Text Swap) */}
            <div className="h-10 relative overflow-hidden flex items-center justify-center min-w-[300px]">
                <AnimatePresence mode="wait">
                    <motion.p
                        key={currentSubtitle}
                        className={`font-sans text-xl font-semibold tracking-wider uppercase ${currentSubtitle === subtitles.length - 1 ? 'text-cosmos-cyan' : 'text-cosmos-muted'
                            }`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                    >
                        {subtitles[currentSubtitle]}
                    </motion.p>
                </AnimatePresence>
            </div>

            {/* Indicador de carregamento simulado (Acento Magenta) */}
            <motion.div
                className="absolute bottom-12 w-48 h-1 bg-cosmos-surface rounded-full overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                <motion.div
                    className="h-full bg-cosmos-magenta"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 3.5, ease: "easeInOut" }}
                />
            </motion.div>
        </motion.div>
    );
}
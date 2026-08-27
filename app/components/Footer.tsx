'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface FooterProps {
    theme?: { bg: string, text: string, shape1: string, shape2: string };
}

export default function Footer({ theme }: FooterProps) {
    const floatingShapes = [
        { id: 1, src: theme?.shape1 || "/shapes/shape-cyan.svg", size: 100, x: "15%" },
        { id: 2, src: theme?.shape2 || "/shapes/shape-orange.svg", size: 140, x: "35%" },
        { id: 3, src: theme?.shape1 || "/shapes/shape-emerald.svg", size: 120, x: "55%" },
        { id: 4, src: theme?.shape2 || "/shapes/shape-magenta.svg", size: 90, x: "75%" },
        { id: 5, src: theme?.shape1 || "/shapes/shape-cyan.svg", size: 150, x: "90%" },
    ];

    return (
        <footer className="w-full pt-32 pb-8 px-6 flex flex-col items-center relative">
            
            {/* Linha de Base e Formas Sólidas Empilhadas (Estilo Google Labs) */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-black/10">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[500px] pointer-events-none">
                    
                    {/* 1. Square Left (Light) */}
                    <motion.div whileHover={{ y: -5, rotate: -2, scale: 1.02 }} transition={{ type: "spring", stiffness: 120, damping: 25 }} className="absolute bottom-0 left-[0px] w-[260px] h-[260px] rounded-[3rem] opacity-60 pointer-events-auto origin-bottom transition-colors" style={{ backgroundColor: theme?.text || '#111827' }} />
                    
                    {/* 2. Hexagon Top Left (Medium) */}
                    <motion.div whileHover={{ y: -5, rotate: 2, scale: 1.02 }} transition={{ type: "spring", stiffness: 120, damping: 25 }} className="absolute bottom-[230px] left-[0px] w-[260px] h-[290px] opacity-90 pointer-events-auto origin-bottom transition-colors" style={{ backgroundColor: theme?.text || '#111827', clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
                    
                    {/* 3. Square Center (Medium) */}
                    <motion.div whileHover={{ y: -5, rotate: 2, scale: 1.02 }} transition={{ type: "spring", stiffness: 120, damping: 25 }} className="absolute bottom-0 left-[240px] w-[280px] h-[280px] rounded-[3rem] opacity-90 pointer-events-auto origin-bottom transition-colors" style={{ backgroundColor: theme?.text || '#111827' }} />
                    
                    {/* 4. Hexagon Center Right (Light) */}
                    <motion.div whileHover={{ y: -5, rotate: -2, scale: 1.02 }} transition={{ type: "spring", stiffness: 120, damping: 25 }} className="absolute bottom-[100px] left-[460px] w-[300px] h-[340px] opacity-60 pointer-events-auto origin-bottom transition-colors" style={{ backgroundColor: theme?.text || '#111827', clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
                    
                    {/* 5. Circle Right (Light) */}
                    <motion.div whileHover={{ y: -5, rotate: 2, scale: 1.02 }} transition={{ type: "spring", stiffness: 120, damping: 25 }} className="absolute bottom-0 left-[680px] w-[300px] h-[300px] rounded-full opacity-60 pointer-events-auto origin-bottom transition-colors" style={{ backgroundColor: theme?.text || '#111827' }} />
                    
                    {/* 6. Clover Far Right (Medium) */}
                    <motion.div whileHover={{ y: -5, rotate: -2, scale: 1.02 }} transition={{ type: "spring", stiffness: 120, damping: 25 }} className="absolute bottom-0 left-[920px] w-[280px] h-[280px] opacity-90 pointer-events-auto origin-bottom flex items-center justify-center transition-colors" style={{ color: theme?.text || '#111827' }}>
                        <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full drop-shadow-sm">
                            <circle cx="30" cy="30" r="30" />
                            <circle cx="70" cy="30" r="30" />
                            <circle cx="30" cy="70" r="30" />
                            <circle cx="70" cy="70" r="30" />
                        </svg>
                    </motion.div>
                </div>
            </div>

            {/* Texto Garrafal Brutalista de Fundo */}
            <div className="w-full max-w-7xl flex justify-center mb-16 select-none pointer-events-none mt-12 overflow-hidden">
                <h1 
                    className="font-display text-[15.6vw] xl:text-[210px] leading-none whitespace-nowrap tracking-tighter"
                    style={{ color: theme?.text || '#111827' }}
                >
                    <span className="font-light">CF</span><span className="font-black">CARREIRA</span>
                </h1>
            </div>

            {/* Socket Inferior Institucional */}
            <div className="w-full max-w-7xl flex flex-col md:flex-row justify-start items-center md:items-center gap-8 md:gap-16 font-sans text-xs font-semibold uppercase tracking-widest text-black/50 z-10">

                {/* Esquerda */}
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: theme?.text || '#10b981' }} />
                    <span>Jaguariúna, SP, Brasil</span>
                </div>

                {/* Redes Sociais */}
                <div className="flex gap-6 flex-wrap justify-center md:justify-start">
                    <a href="https://github.com/cfcarreira84" target="_blank" rel="noreferrer" className="transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = theme?.text || '#000'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>GitHub</a>
                    <a href="https://discordapp.com/users/cf.carreira" target="_blank" rel="noreferrer" className="transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = theme?.text || '#000'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Discord</a>
                    <a href="https://www.linkedin.com/in/cfcarreira/" target="_blank" rel="noreferrer" className="transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = theme?.text || '#000'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>LinkedIn</a>
                    <a href="https://wa.me/5511994787501" target="_blank" rel="noreferrer" className="transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = theme?.text || '#000'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>WhatsApp</a>
                </div>

            </div>

            {/* Socket Final - Créditos */}
            <div className="w-full max-w-7xl mt-16 pt-8 border-t border-black/5 text-center text-[10px] text-black/40 font-sans uppercase tracking-widest leading-relaxed">
                Projeto inspirado no Google Labs, criado 100% com Antigravity IDE, Gemini 3.1 Pro, Nano Banana, Omni Flash e outras APIs em 16 horas.
            </div>
            
        </footer>
    );
}
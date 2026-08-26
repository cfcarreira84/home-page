'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FlaskConical } from 'lucide-react';

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
    useEffect(() => {
        const finishTimer = setTimeout(onComplete, 8500);
        return () => clearTimeout(finishTimer);
    }, [onComplete]);

    // Variantes para o efeito Blur-in Cascade do Google Labs
    const textContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.3 }
        },
        exit: { opacity: 1 }
    };

    const textItem: any = {
        hidden: { opacity: 0, y: 20, filter: "blur(12px)" },
        show: { 
            opacity: 1, 
            y: 0, 
            filter: "blur(0px)", 
            transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
        }
    };

    return (
        <>
            {/* Definição da Máscara (O "buraco" que cresce e revela o site) */}
            <svg width="0" height="0" className="absolute pointer-events-none">
                <defs>
                    <mask id="holeMask">
                        <rect x="-50vw" y="-50vh" width="200vw" height="200vh" fill="white" />
                        <motion.g
                            initial={{ scale: 0, rotate: 0, x: "50vw", y: "50vh" }}
                            animate={{ scale: 0, rotate: 0, x: "50vw", y: "50vh" }}
                            exit={{ scale: 150, rotate: 180, x: "50vw", y: "50vh" }}
                            transition={{ duration: 4.5, ease: [0.65, 0, 0.35, 1] }}
                        >
                            <path 
                                d="M 35.480469 251.566406 C 52.933594 272.554688 52.96875 328.246094 35.613281 349.316406 C 13.789062 375.808594 0.71875 409.699219 0.71875 446.546875 C 0.71875 531.640625 69.648438 600 153.8125 600 C 190.851562 600 224.75 586.972656 251.226562 565.214844 C 272.347656 547.855469 328.375 547.855469 349.496094 565.210938 C 375.972656 586.972656 409.875 600 446.921875 600 C 531.085938 600 600 531.640625 600 446.546875 C 600 409.425781 586.523438 375.304688 564.332031 348.726562 C 546.894531 327.847656 546.894531 272.867188 564.304688 251.964844 C 586.511719 225.300781 600 190.988281 600 153.453125 C 600 69.09375 531.085938 0 446.921875 0 C 410.195312 0 376.691406 12.738281 350.351562 34.0625 C 328.910156 51.421875 270.746094 51.226562 249.304688 33.871094 C 223.105469 12.664062 189.695312 0 153.078125 0 C 68.914062 0 0 69.09375 0 153.453125 C 0 190.796875 13.355469 224.960938 35.480469 251.566406 Z M 35.480469 251.566406"
                                fill="black"
                                transform="translate(-300, -300)"
                            />
                        </motion.g>
                    </mask>
                </defs>
            </svg>

            <motion.div
                className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F5F3ED] overflow-hidden"
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1, delay: 4.4, ease: "easeOut" }}
                style={{ WebkitMask: "url(#holeMask)", mask: "url(#holeMask)" }}
            >

            {/* 1. Laranja (Top-Left) */}
            <motion.div
                className="absolute -top-[28%] -left-[12%] w-[28vw] h-[28vw] opacity-90 pointer-events-none"
                initial={{ x: "-50vw", y: "-50vh", scale: 0, rotate: -45 }}
                animate={{ x: 0, y: 0, scale: 1, rotate: -8 }}
                transition={{ type: "spring", bounce: 0.3, duration: 2 }}
            >
                <motion.div
                    className="relative w-full h-full"
                    animate={{ x: [0, 15, -10, 5, 0], y: [0, -10, 15, -5, 0], rotate: [0, -10, 5, -5, 0] }}
                    transition={{ 
                        x: { duration: 16, repeat: Infinity, ease: "easeInOut" },
                        y: { duration: 14, repeat: Infinity, ease: "easeInOut" },
                        rotate: { duration: 15, repeat: Infinity, ease: "easeInOut" }
                    }}
                >
                    <Image src="/shapes/shape-orange.svg" alt="" fill className="object-contain" priority />
                </motion.div>
            </motion.div>

            {/* 2. Ciano (Top-Right) */}
            <motion.div
                className="absolute -top-[22%] -right-[12%] w-[45vw] h-[45vw] opacity-90 pointer-events-none"
                initial={{ x: "50vw", y: "-50vh", scale: 0, rotate: 45 }}
                animate={{ x: 0, y: 0, scale: 1, rotate: 12 }}
                transition={{ type: "spring", bounce: 0.3, duration: 2.2, delay: 0.1 }}
            >
                <motion.div
                    className="relative w-full h-full"
                    animate={{ x: [0, -20, 15, -10, 0], y: [0, 18, -12, 8, 0], rotate: [0, 15, -8, 5, 0] }}
                    transition={{ 
                        x: { duration: 20, repeat: Infinity, ease: "easeInOut" },
                        y: { duration: 18, repeat: Infinity, ease: "easeInOut" },
                        rotate: { duration: 22, repeat: Infinity, ease: "easeInOut" }
                    }}
                >
                    <Image src="/shapes/shape-cyan.svg" alt="" fill className="object-contain" priority />
                </motion.div>
            </motion.div>

            {/* 3. Magenta (Bottom-Left) */}
            <motion.div
                className="absolute -bottom-[22%] -left-[10%] w-[30vw] h-[30vw] opacity-90 pointer-events-none"
                initial={{ x: "-50vw", y: "50vh", scale: 0, rotate: -45 }}
                animate={{ x: 0, y: 0, scale: 1, rotate: -18 }}
                transition={{ type: "spring", bounce: 0.3, duration: 2.1, delay: 0.2 }}
            >
                <motion.div
                    className="relative w-full h-full"
                    animate={{ x: [0, 18, -15, 10, 0], y: [0, 12, -20, 15, 0], rotate: [0, -12, 8, -5, 0] }}
                    transition={{ 
                        x: { duration: 22, repeat: Infinity, ease: "easeInOut" },
                        y: { duration: 15, repeat: Infinity, ease: "easeInOut" },
                        rotate: { duration: 18, repeat: Infinity, ease: "easeInOut" }
                    }}
                >
                    <Image src="/shapes/shape-magenta.svg" alt="" fill className="object-contain" priority />
                </motion.div>
            </motion.div>

            {/* 4. Esmeralda (Bottom-Right) */}
            <motion.div
                className="absolute -bottom-[25%] -right-[8%] w-[38vw] h-[38vw] opacity-90 pointer-events-none"
                initial={{ x: "50vw", y: "50vh", scale: 0, rotate: 45 }}
                animate={{ x: 0, y: 0, scale: 1, rotate: 8 }}
                transition={{ type: "spring", bounce: 0.3, duration: 2.4, delay: 0.15 }}
            >
                <motion.div
                    className="relative w-full h-full"
                    animate={{ x: [0, -15, 20, -10, 0], y: [0, -25, 18, -12, 0], rotate: [0, 10, -15, 8, 0] }}
                    transition={{ 
                        x: { duration: 19, repeat: Infinity, ease: "easeInOut" },
                        y: { duration: 21, repeat: Infinity, ease: "easeInOut" },
                        rotate: { duration: 17, repeat: Infinity, ease: "easeInOut" }
                    }}
                >
                    <Image src="/shapes/shape-emerald.svg" alt="" fill className="object-contain" priority />
                </motion.div>
            </motion.div>

            {/* Bloco Central com Efeito Blur-in Cascade */}
            <motion.div
                variants={textContainer}
                initial="hidden"
                animate="show"
                exit="exit"
                className="relative z-10 flex flex-col items-center w-full max-w-[1200px] mx-auto px-[4vw]"
            >
                <motion.div 
                    variants={textItem}
                    className="flex items-center gap-3 md:gap-4 mb-[16px] md:mb-[20px]"
                >
                    <FlaskConical className="w-[28px] h-[28px] md:w-[48px] md:h-[48px] text-[#202124]" strokeWidth={2.5} />
                    <h1 className="text-[28px] md:text-[48px] font-sans tracking-tight leading-none text-[#202124]">
                        <span className="font-light">CF</span><span className="font-bold">CARREIRA // LABS</span>
                    </h1>
                </motion.div>
                
                <motion.p 
                    variants={textItem}
                    className="text-[18px] md:text-[32px] font-sans font-normal text-[#202124] tracking-tight text-center leading-[1.3] max-w-[95vw] md:max-w-[80vw]"
                >
                    O laboratório de IA aplicada e engenharia de receita.<br /> Menos abstração, mais tração.
                </motion.p>
            </motion.div>

        </motion.div>
        </>
    );
}
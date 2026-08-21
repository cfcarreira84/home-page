'use client';

export default function Footer() {
    return (
        <footer className="w-full bg-cosmos-base pt-20 pb-8 px-6 flex flex-col items-center border-t border-cosmos-border relative overflow-hidden">

            {/* Texto Garrafal Brutalista de Fundo */}
            <div className="w-full max-w-7xl flex justify-center mb-16 select-none opacity-80 pointer-events-none">
                <h1 className="font-display text-[12vw] leading-none text-cosmos-surface whitespace-nowrap tracking-tighter">
                    <span className="font-light">CF</span><span className="font-black">CARREIRA</span>
                </h1>
            </div>

            {/* Socket Inferior Institucional */}
            <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6 font-sans text-xs font-semibold uppercase tracking-widest text-cosmos-muted z-10">

                {/* Esquerda */}
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cosmos-emerald animate-pulse" />
                    <span>Jaguariúna, SP, Brasil</span>
                </div>

                {/* Centro */}
                <div className="flex gap-6">
                    <a href="#" className="hover:text-cosmos-cyan transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-cosmos-cyan transition-colors">GitHub</a>
                </div>

                {/* Direita (Botão Text-Swap Simples) */}
                <div className="relative group cursor-pointer overflow-hidden px-4 py-2 border border-cosmos-border rounded-full hover:border-cosmos-cyan transition-colors">
                    <div className="transition-transform duration-300 group-hover:-translate-y-8">
                        <span className="group-hover:text-cosmos-cyan">Standard Profile</span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center translate-y-8 transition-transform duration-300 group-hover:translate-y-0">
                        <span className="text-cosmos-cyan">Baixar CV.pdf</span>
                    </div>
                </div>

            </div>
        </footer>
    );
}
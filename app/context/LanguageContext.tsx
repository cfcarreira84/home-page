'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'pt' | 'en' | 'zh';

interface LanguageContextProps {
    lang: Language;
    setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps>({
    lang: 'pt',
    setLanguage: () => {}
});

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLangState] = useState<Language>('pt');

    useEffect(() => {
        if (typeof window === 'undefined') return;

        // 1. Ler da URL (query param ?lang=en / ?lang=zh / ?lang=pt)
        const params = new URLSearchParams(window.location.search);
        const urlLang = params.get('lang') as Language;

        if (urlLang && (urlLang === 'pt' || urlLang === 'en' || urlLang === 'zh')) {
            setLangState(urlLang);
            sessionStorage.setItem('preferred_lang', urlLang);
            document.documentElement.lang = urlLang === 'zh' ? 'zh-CN' : urlLang === 'en' ? 'en' : 'pt-BR';
            return;
        }

        // 2. Se não houver na URL, buscar preferência salva na sessão
        const savedLang = sessionStorage.getItem('preferred_lang') as Language;
        if (savedLang && (savedLang === 'pt' || savedLang === 'en' || savedLang === 'zh')) {
            setLangState(savedLang);
            document.documentElement.lang = savedLang === 'zh' ? 'zh-CN' : savedLang === 'en' ? 'en' : 'pt-BR';
        }
    }, []);

    const setLanguage = (newLang: Language) => {
        setLangState(newLang);
        if (typeof window !== 'undefined') {
            sessionStorage.setItem('preferred_lang', newLang);
            document.documentElement.lang = newLang === 'zh' ? 'zh-CN' : newLang === 'en' ? 'en' : 'pt-BR';

            // Atualiza URL preservando pathname e query params para compartilhamento
            const url = new URL(window.location.href);
            if (newLang === 'pt') {
                url.searchParams.delete('lang'); // PT é o canônico padrão limpo
            } else {
                url.searchParams.set('lang', newLang);
            }
            window.history.pushState({}, '', url.toString());
        }
    };

    return (
        <LanguageContext.Provider value={{ lang, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}

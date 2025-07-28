import { useState, useEffect } from 'react';
import { getLanguage, setLanguage, type Language } from '@/lib/i18n';

export function useLanguage() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(getLanguage());

  useEffect(() => {
    const handleLanguageChange = () => {
      setCurrentLanguage(getLanguage());
    };

    window.addEventListener('languageChanged', handleLanguageChange);
    return () => window.removeEventListener('languageChanged', handleLanguageChange);
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    setCurrentLanguage(lang);
  };

  return {
    language: currentLanguage,
    changeLanguage
  };
}
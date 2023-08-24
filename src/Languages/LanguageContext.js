// LanguageContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import en from './en.json';
import de from './de.json';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const storedLanguage = localStorage.getItem('selectedLanguage') || 'de';
  const [language, setLanguage] = useState(storedLanguage);
  const languages = { en, de };

  const translate = (key) => languages[language][key] || key;

  useEffect(() => {
    localStorage.setItem('selectedLanguage', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};

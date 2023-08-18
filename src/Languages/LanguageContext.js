// LanguageContext.js
import React, { createContext, useContext, useState } from 'react';
import en from './en.json'; 
import de from './de.json'; 

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('de'); 
  const languages = { en, de }; // Tüm çevirileri bir nesnede sakla

  const translate = (key) => languages[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};

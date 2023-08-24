// LanguageSelector.js
import React from 'react';
import { useLanguage } from '../LanguageContext';
import './LanguageSelector.css'

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    // Sayfa yenileme işlemi
    window.location.reload();
  };

  return (
    <div className="language-selector">
      <button className='btn-lng btn-de' onClick={() => handleLanguageChange('de')} disabled={language === 'de'}>
        DE
      </button>
      <button className='btn-lng btn-en'  onClick={() => handleLanguageChange('en')} disabled={language === 'en'}>
        EN
      </button>
    </div>
  );
};

export default LanguageSelector;

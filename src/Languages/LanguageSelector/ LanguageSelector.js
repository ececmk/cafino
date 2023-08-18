import React from 'react';
import { useLanguage } from '../LanguageContext';
import './LanguageSelector.css'

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-selector">
      <button className='btn-lng btn-de' onClick={() => setLanguage('de')} disabled={language === 'de'}>
        DE
      </button>
      <button className='btn-lng btn-en'  onClick={() => setLanguage('en')} disabled={language === 'en'}>
        EN
      </button>
    </div>
  );
};

export default LanguageSelector;

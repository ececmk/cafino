import React from 'react';
import { useLanguage } from '../../../Languages/LanguageContext';
import './Categories.css';

const Categories = ({ categories, filterItems }) => {
  const { language } = useLanguage();

  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(category)}>
            {language === 'en' ? category.category_en : category.category_de}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;

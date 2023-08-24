import React from 'react';
import { useLanguage } from '../../../Languages/LanguageContext';
import items_en from '../../../MenuData/menu_en.json';
import items_de from '../../../MenuData/menu_de.json';
import './Categories.css';

const Categories = ({ categories, filterItems }) => {
 
  const { language } = useLanguage();

  const items = language === 'en' ? items_en : items_de;

  

  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        //console.log(category)
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(category)}>
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;

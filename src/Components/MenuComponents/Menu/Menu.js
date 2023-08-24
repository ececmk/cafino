import React from 'react';
import { useLanguage } from '../../../Languages/LanguageContext'; 
import './Menu.css';
import items_en from '../../../MenuData/menu_en.json';
import items_de from '../../../MenuData/menu_de.json';

const Menu = ( ) => {
  const { translate, language } = useLanguage();

  const items = language === 'en' ? items_en : items_de;
  
  return (
    <div className='section-center'>
      {items.map((menuItem) => {
        const { id, title, desc, price } = menuItem;
        return (
          <article key={id} className='menu-item'>
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <p className='item-text'>{desc}</p>
              </header>
              <h4 className='price'>{price}€</h4>         
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;


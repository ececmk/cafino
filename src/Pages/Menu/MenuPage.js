import React, { useState, useMemo } from 'react';
import { useLanguage } from '../../Languages/LanguageContext';
import Menu from '../../Components/MenuComponents/Menu/Menu';
import Categories from '../../Components/MenuComponents/Categories/Categories';
import items_en from '../../MenuData/menu_en.json';
import items_de from '../../MenuData/menu_de.json';
import './MenuPage.css';

const MenuPage = () => {
  const { language, translate } = useLanguage();

  const items = language === 'en' ? items_en : items_de;


  const allCategories = useMemo(() => ['all', ...new Set(items.map((item) => item.category))], [items]);


  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    } 
    const filteredItems = items.filter((item) => item.category === category);
    setMenuItems(filteredItems);
   console.log(filteredItems)
  };
  
  return (
    <main>
      <section className="menu-section">
        <div className="title">
          <h2>{translate('menu-title')}</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default MenuPage;

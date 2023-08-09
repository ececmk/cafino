import React, { useState, useMemo } from 'react';
import Menu from '../../Components/MenuComponents/Menu/Menu'
import Categories from '../../Components/MenuComponents/Menu/Categories';
import items from './MenuData'


const MenuPage = () => {


const allCategories = useMemo(() => ['all', ...new Set(items.map((item) => item.category))], [items]);

  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
     <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default MenuPage

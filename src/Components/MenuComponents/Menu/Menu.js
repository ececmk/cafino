import React from 'react';
import './Menu.css';

const Menu = ({ items }) => {
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
              <h4 className='price'>${price}</h4>         
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;

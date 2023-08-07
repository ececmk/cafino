import React from 'react';

const Menu = ({ items }) => {
  return (
    <div className='section-center'>
      {items.map((menuItem) => {
        const { id, title, subtitle, desc, price } = menuItem;

        return (
          <article key={id} className='menu-item'>
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h5> {subtitle} </h5>
                {price.map((p, index) => (
                  <h4 key={index} className='price'>
                    {p.small} - {p.large}
                  </h4>
                ))}
              </header>
              <p className='item-text'>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;

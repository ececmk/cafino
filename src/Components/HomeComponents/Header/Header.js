import React from 'react';
import { useLanguage } from '../../../Languages/LanguageContext'; 
import './Header.css';
import ImageCarousel from './ImageCarousel/ImageCarousel';

const Header = () => {

    const { translate } = useLanguage();

    return (
        <header className='header'>
           <ImageCarousel />
           <div className='heading-wrapper'>
           <h5>{translate('header-subtitle')}</h5>
           <h3>{translate('header-title')}</h3>
          <button className='btn btn-light' onClick={() => window.location.href = '/menu'}>{translate('header-button')}</button>
           </div>
          
        </header>
    )

}
export default Header;
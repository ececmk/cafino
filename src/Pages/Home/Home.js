import React from 'react';
import { useLanguage } from '../../Languages/LanguageContext'; 
import Header from '../../Components/HomeComponents/Header/Header'
import Reviews from '../../Components/HomeComponents/Reviews/Reviews';
import FoodSlider from '../../Components/HomeComponents/FoodSlider/FoodSlider';
import './Home.css'

const Home = () => {

  const { translate } = useLanguage();

  return (
    <div>
      <Header />
      <section className='hero-section'>
        <h4>{translate('home-subtitle')}</h4>
        <h3>{translate('home-title')}</h3>
        <p>{translate('home-body')}</p>
        <button className="btn btn-gold" onClick={() => window.location.href = '/contact'}>{translate('home-reservation-btn')}</button>
        <div className='hero-images-wrapper'>
          <img src='../../../images/hero-img-1.jpg' alt='coffee'></img>
          <img src='../../../images/hero-img-2.jpg' alt='bakery'></img>
          <img src='../../../images/hero-img-3.jpg' alt='wine'></img>
        </div>
      </section>
      <Reviews />
      <FoodSlider />
      <section className='follow-insta'>
      <a href="https://www.instagram.com/cafino_muenchen/" target="_blank" rel="noreferrer"> <button><p>{translate('follow-us-insta-btn')}</p></button></a>
      </section>
    </div>
  )
}

export default Home
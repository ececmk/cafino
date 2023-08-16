import React from 'react';
import Header from '../../Components/HomeComponents/Header/Header'
import Reviews from '../../Components/HomeComponents/Reviews/Reviews';
import FoodSlider from '../../Components/HomeComponents/FoodSlider/FoodSlider';
import './Home.css'

const Home = () => {
  return (
    <div>
      <Header />
      <section className='hero-section'>
        <h4>Your local Café & Vinothek in the heart of Munich</h4>
        <h3>Welcome to Cafino</h3>
        <p>Our cozy café blends specialty coffee, fresh baked goods, savory main courses, and a selection of wine and spirits. From the first sip to the last bite, experience flavors that awaken your taste buds. Discover the power of culinary harmony as coffee, baking, and savory dishes converge for an unforgettable dining experience. Indulge at Cafino, where every moment is a symphony of tastes and aromas.</p>
        <button className="btn btn-gold" onClick={() => window.location.href = '/contact'}>book a table now</button>
        <div className='hero-images-wrapper'>
          <img src='../../../images/hero-img-1.jpg' alt='coffee'></img>
          <img src='../../../images/hero-img-2.jpg' alt='bakery'></img>
          <img src='../../../images/hero-img-3.jpg' alt='wine'></img>
        </div>
      </section>
      <Reviews />
      <FoodSlider />
      <section className='follow-insta'>
      <a href="https://www.instagram.com/cafino_muenchen/" target="_blank" rel="noreferrer"> <button><p>Follow Us on Instagram</p></button></a>
      </section>
    </div>
  )
}

export default Home
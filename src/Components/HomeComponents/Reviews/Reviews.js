import React from 'react';
import { useLanguage } from '../../../Languages/LanguageContext';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import reviewsData from './reviewsData';
import './Reviews.css';

const Review = () => {
  
  const { language } = useLanguage();

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <FaChevronRight />,
    prevArrow: <FaChevronLeft />,
    responsive: [
      // ...
    ]
  };

  return (
    <article className='review'>
      <Slider {...settings}>
        {reviewsData.map((review) => (
          <div key={review.id}>
            <span className='quote-icon-left'>
              <FaQuoteLeft />
            </span>
            <p className='info'>{language === 'en' ? review.text_en : review.text_de}</p>
            <p className='author'>{review.name}</p>
            <span className='quote-icon-right'>
              <FaQuoteRight />
            </span>
          </div>
        ))}
      </Slider>
    </article>
  );
};

export default Review;

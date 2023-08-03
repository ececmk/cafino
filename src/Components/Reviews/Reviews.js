import React, { useState } from 'react';
import reviewsData from './reviewsData';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Reviews.css';

const Review = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow:   <FaChevronRight />,
    prevArrow: <FaChevronLeft />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
}
  

  return (
    <article className='review'>
    <Slider {...settings} >
    {reviewsData.map((review)=> {
      return(
        <div>
      <span className='quote-icon-left'>
        <FaQuoteLeft />
      </span>
      <p className='info'>{review.text}</p>
      <p className='author'>{review.name}</p>
      <span className='quote-icon-right'>
        <FaQuoteRight />
      </span>
      </div>
   
      )
    })}
    
    </Slider>
    </article>
  );
};

export default Review;

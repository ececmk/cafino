import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ImageCarousel.css';

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const images = [
      'images/header-carousel-images/header-carousel-img1.jpg',
      'images/header-carousel-images/header-carousel-img2.jpg',
      'images/header-carousel-images/header-carousel-img3.jpg',
      'images/header-carousel-images/header-carousel-img4.jpg',
      'images/header-carousel-images/header-carousel-img5.jpg',
    ];

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const images = [
    'images/header-carousel-images/header-carousel-img1.jpg',
    'images/header-carousel-images/header-carousel-img2.jpg',
    'images/header-carousel-images/header-carousel-img3.jpg',
    'images/header-carousel-images/header-carousel-img4.jpg',
    'images/header-carousel-images/header-carousel-img5.jpg',
  ];

  return (
    <div className="fade-carousel">
      {images.map((imageUrl, index) => (
        <img
          key={index}
          src={process.env.PUBLIC_URL + imageUrl}
          alt={`Image ${index + 1}`}
          className={`fade-image ${index === currentIndex ? 'active' : ''}`}
        />
      ))}
    </div>
  );
};

export default ImageCarousel;

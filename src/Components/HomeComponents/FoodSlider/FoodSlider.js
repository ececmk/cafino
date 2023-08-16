import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './FoodSlider.css'

const MultipleItems = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
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
              slidesToShow: 2,
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
        <div className="slide-wrapper">
            <h2>Coffee, baked goods or wine... Whatever you're looking for!</h2>
            <Slider {...settings} >
                <div>
                    <img className="food-img" src="../../../images/food-slider-images/image1.jpg" alt="food" />
                </div>
                <div>
                    <img className="food-img" src="../../../images/food-slider-images/image2.jpg" alt="food" />
                </div>
                <div>
                    <img className="food-img" src="../../../images/food-slider-images/image3.jpg" alt="food" />
                </div>
                <div>
                    <img className="food-img" src="../../../images/food-slider-images/image4.jpg" alt="food" />
                </div>
                <div>
                    <img className="food-img" src="../../../images/food-slider-images/image5.jpg" alt="food" />
                </div>
                <div>
                    <img className="food-img" src="../../../images/food-slider-images/image6.jpg" alt="food" />
                </div>
                <div>
                    <img className="food-img" src="../../../images/food-slider-images/image7.jpg" alt="food" />
                </div>
                <div>
                    <img className="food-img" src="../../../images/food-slider-images/image8.jpg" alt="food" />
                </div>
                <div>
                    <img className="food-img" src="../../../images/food-slider-images/image9.jpg" alt="food" />
                </div>
            </Slider>
           <button className="btn btn-gold" onClick={() => window.location.href = '/menu'}>View Full Menu</button>
        </div>
    );
};

export default MultipleItems;

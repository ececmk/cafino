import React, { useState } from 'react';
import reviewsData from './reviewsData';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

import './Reviews.css'

const Review = () => {

    const [index, setIndex] = useState(0);
    const { name, text } = reviewsData[index]

    const checkNumber = (number) => {
        if (number > reviewsData.length - 1) {
            return 0;
        } else if (number < 0) {
            return reviewsData.length - 1
        } else {
            return number
        }

    }

    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        })
    }

    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        })
    }

    return <article className='review'>
        <span className='quote-icon-left'>
            < FaQuoteLeft />
        </span>
        <p className='info'>{text}</p>
        <p className='author'>{name}</p>
        <span className='quote-icon-right'>
            < FaQuoteRight />
        </span>
        <div className='button-container'>
            <button className='prev-btn' onClick={prevPerson}>
                <FaChevronLeft />
            </button>
            <button className='next-btn' onClick={nextPerson}>
                <FaChevronRight />
            </button>
        </div>
    </article>
};

export default Review;
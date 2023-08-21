import React from 'react'
import { useLanguage } from '../../Languages/LanguageContext'; 
import './Contact.css'
import { FaStore, FaPhone } from 'react-icons/fa';

const Contact = () => {

    const { translate } = useLanguage();

    return (
        <section className='contact-container'>
            <div className='contact-wrapper'>
                <h4>{translate('contact-title')}</h4>
                <p>{translate('contact-body')}</p>
                <div className='contact-info'>
                    <FaStore className='icon' />
                    <p>Truderinger Str. 277,81825 München</p>
                </div>
                <div className='contact-info'>
                    <FaPhone className='icon' />
                    <p>089 21567575</p>
                </div>
                <a href='https://goo.gl/maps/oQL5fwE1crzjUckG7' target="_blank" rel="noreferrer"> <button className="btn btn-gold">{translate('contact-btn')}</button></a>
            </div>
            <img className='contact-img' src='../../../images/cafino-outside.jpg' alt='Cafino Outside' />
        </section>
    )
}

export default Contact

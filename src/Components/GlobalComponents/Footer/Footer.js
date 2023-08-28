import React from 'react';
import { useLanguage } from '../../../Languages/LanguageContext'; 
import { FaStore, FaPhone } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {

    const { translate } = useLanguage();

    return (
        <main className='footer'>
            <section className='footer-wrapper' >
                <div className='footer-title'>
                    <h1>Cafino</h1>
                    <p>Café & Vinothek</p>
                </div>
                <div className='working-hours'>
                    <h3>{translate('working-hours-title')}</h3>
                    <p>{translate('working-hours-m')}</p>
                    <p>{translate('working-hours-tu')}</p>
                    <p>{translate('working-hours-w')}</p>
                    <p>{translate('working-hours-th')}</p>
                    <p>{translate('working-hours-f')}</p>
                    <p>{translate('working-hours-sa')}</p>
                    <p>{translate('working-hours-su')}</p>
                </div>
                <div>
                    <h3>{translate('Address')}</h3>
                    <div className='contact'>
                        <FaStore className='icon' />
                        <p>Truderinger Str. 277, 81825 München</p>
                    </div>
                    <div className='contact'>
                        <FaPhone className='icon' />
                        <p>089 21567575</p>
                    </div>
                </div>
            </section>
            <p>© Copyright Cafino. All rights reserved.</p>
        </main>
    )
}

export default Footer
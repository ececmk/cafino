import React from 'react'
import { FaStore, FaPhone } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
    return (
        <main className='footer'>
            <section className='footer-wrapper' >
                <div>
                    <h1>Cafino</h1>
                    <p>Café & Vinothek</p>
                </div>
                <div>
                    <h3>Working Hours</h3>
                    <p>Monday - Closed</p>
                    <p>Tuesday - Closed</p>
                    <p>Wednesday - 10:00 - 18:00</p>
                    <p>Thursday 10:00 - 22:00</p>
                    <p>Friday - 10:00 - 22:00</p>
                    <p>Saturday - 10:00 - 18:00</p>
                    <p>Sunday - Closed</p>
                </div>
                <div>
                    <h3>Address</h3>
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
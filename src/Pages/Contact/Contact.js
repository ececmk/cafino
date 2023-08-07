import React from 'react'
import './Contact.css'
import { FaStore, FaPhone } from 'react-icons/fa';

const Contact = () => {
    return (
        <section className='contact'>
            <div>
                <h4>Our Location</h4>
                <div className='contact'>
                    <FaStore className='icon' />
                    <p>Truderinger Str. 277, 81825 München</p>
                </div>
                <div className='contact'>
                    <FaPhone className='icon' />
                    <p>089 21567575</p>
                </div>

                <button>View in Google Maps</button>
            </div>
            <img className='contact-img' src='../../../images/cafino-outside.jpg' alt='Cafino Outside' />
        </section>
    )
}

export default Contact

import React from 'react'
import './Contact.css'
import { FaStore, FaPhone } from 'react-icons/fa';

const Contact = () => {
    return (
        <section className='contact-container'>
            <div className='contact-wrapper'>
                <h4 >Our Location</h4>
                <p>We warmly invite you to reach out to us for any inquiries or to make a reservation. Our team is dedicated to ensuring your experience with us is exceptional. To secure your spot, please feel free to give us a call. We greatly appreciate your interest and look forward to serving you soon.</p>
                <div className='contact-info'>
                    <FaStore className='icon' />
                    <p>Truderinger Str. 277,81825 München</p>
                </div>
                <div className='contact-info'>
                    <FaPhone className='icon' />
                    <p>089 21567575</p>
                </div>
                <a href='https://goo.gl/maps/oQL5fwE1crzjUckG7' target="_blank" rel="noreferrer"> <button className="btn-gold">View in Google Maps</button></a>
            </div>
            <img className='contact-img' src='../../../images/cafino-outside.jpg' alt='Cafino Outside' />
        </section>
    )
}

export default Contact

import React from 'react';
import { FaPhone, FaEnvelope, FaInstagram, FaFacebook } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-section">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <div><FaPhone /> +1 234 567 890</div>
        <div><FaEnvelope /> info@hellograceyoga.com</div>
        <div><FaInstagram /> @hellograceyoga</div>
        <div><FaFacebook /> /hellograceyoga</div>
      </div>
    </div>
  );
};

export default Contact;

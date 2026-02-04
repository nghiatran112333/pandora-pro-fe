import React from 'react';
import { Phone } from 'lucide-react';
import './FloatingContact.css';

const FloatingContact = () => {
    return (
        <div className="floating-contact">
            <a href="tel:0123456789" className="contact-btn">
                <div className="btn-icon">
                    <Phone size={24} fill="currentColor" />
                </div>
                <span className="btn-text">Hotline 24/7</span>
            </a>
        </div>
    );
};

export default FloatingContact;

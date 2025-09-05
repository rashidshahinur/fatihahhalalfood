import React from 'react';
import './ContactSection.css';
import { motion } from 'framer-motion';
import ContactInfo from '../ContactInfo/ContactInfo';

function ContactSection() {
  return (
    <div className='contact-section text-light py-5 shadow'>
      <div className="container">
        <div className="row">
          {/* LEFT side – Contact info */}
          <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0">
            <ContactInfo />

            {/* Clickable address and button */}
            <p className="mt-3 text-center">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=1549-1+105,+Sakai,+Sashima+District,+Ibaraki+306-0433,+Japan"
                target="_blank"
                rel="noopener noreferrer"
                className="link-light text-decoration-underline"
              >
                1549-1 105, Sakai, Sashima District, Ibaraki 306-0433, Japan
              </a>
            </p>

            <div className="text-center">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=1549-1+105,+Sakai,+Sashima+District,+Ibaraki+306-0433,+Japan"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success rounded-0 mt-2"
              >
                Open in Google Maps
              </a>
            </div>
          </div>

          {/* RIGHT side – Google Map embed */}
          <motion.div
            className="col-lg-6 d-flex justify-content-center"
            initial={{ opacity: 0, x: 350 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div
              className="ratio ratio-16x9"
              style={{
                borderRadius: 12,
                overflow: 'hidden',
                boxShadow: '0 8px 30px rgba(0,0,0,.25)',
                width: '100%'
              }}
            >
              <iframe
                title="Fatihah Halal Food – Google Map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=1549-1+105,+Sakai,+Sashima+District,+Ibaraki+306-0433,+Japan&output=embed"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
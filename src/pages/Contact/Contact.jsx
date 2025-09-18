import React from 'react';
import './Contact.css';
import { motion } from 'framer-motion';
import ContactInfo from '../../components/ContactInfo/ContactInfo';
import ContactForm from '../../components/ContactForm/ContactForm';

function Contact() {
  return (
    <div className='contact-page' id='contact-page'>
      <header className='height-50 mt-5'>
        <motion.div 
          className="container h-100 d-flex align-items-center justify-content-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className='text-light'>Contact</h1>
        </motion.div>
      </header>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <ContactInfo />
          </div>
          <div className="col-lg-6 d-flex justify-content-center mt-5 mt-lg-0">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Reviews removed here */}
    </div>
  )
}

export default Contact;
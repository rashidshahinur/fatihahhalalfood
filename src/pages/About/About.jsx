import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

function About() {
  return (
    <div className='about-page' id='about-page'>
      <header className='height-50 mt-5'>
        <motion.div 
          className="container h-100 d-flex align-items-center justify-content-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className='text-light'>About</h1>
        </motion.div>
      </header>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-12">
            <p className="fs-5">
              Welcome to Fatihah Halal Food!  
              We are proud to serve authentic halal cuisine in Ibaraki, Japan.  
              Our mission is to bring you not just delicious meals, but also a warm
              and welcoming dining experience where every guest feels like family.  
            </p>
            <p className="fs-5">
              Whether you’re here for a quick lunch, a family dinner, or to explore 
              new flavors, we aim to make every meal memorable.  
              Thank you for choosing us and being part of our story.
            </p>
          </div>
        </div>
      </div>

      {/* Reviews removed here */}
    </div>
  )
}

export default About;
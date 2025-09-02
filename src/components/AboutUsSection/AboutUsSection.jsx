import React from 'react';
import './AboutUsSection.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AboutSectionImg from '../../utils/images/about-section-img.jpg';

function AboutUsSection() {
  return (
    <div className="container my-5">
        <div className="flex-column-reverse flex-lg-row row">
            <motion.div 
                className="col-lg-6 d-flex justify-content-center"
                initial={{ opacity: 0, x: -300 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <img src={AboutSectionImg} className='about-section-img img-fluid mt-5 mt-lg-0 shadow' alt="about us" />
            </motion.div>
            <motion.div 
                className="col-lg-6 d-flex flex-column justify-content-center"
                initial={{ opacity: 0, x: 350 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <h2 className='text-uppercase fw-bold fs-1 mb-4 mb-lg-5'>About us</h2>
                <h2>About Us</h2>

                <p>
                Welcome to <strong>Fatihah Halal Food</strong> in Ibaraki, Japan — a home for
                authentic halal flavors and warm hospitality. We prepare each dish with care,
                using quality ingredients, and serve with the respect our guests deserve.
                </p>

                <p>
                You’ll find us at <strong>1549-1 105, Sakai, Sashima District, Ibaraki 306-0433, Japan</strong>.
                Whether it’s a relaxed lunch or a cozy dinner with family and friends, we can’t
                wait to serve you our delicious biryani, kebabs, curries, and more — all
                <strong> 100% Certified Halal</strong>.
                </p>
                <Link to='/about'>
                    <button type='button' className='btn btn-dark btn-lg rounded-0 text-capitalize shadow'>More about us</button>
                </Link>
            </motion.div>
        </div>
    </div>
  )
}

export default AboutUsSection;
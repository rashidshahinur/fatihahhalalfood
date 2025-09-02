import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    const [newDate, setNewDate] = useState('');
    useEffect(() => {
        let todayDate = new Date();
        let todayYear = todayDate.getFullYear();
        setNewDate([todayYear])
    }, []);

  return (
      <footer className='bg-body-tertiary' id='footer'>
    <p className='pt-3 m-0 text-center'>
      © {new Date().getFullYear()} Fatihah Halal Food, All Rights Reserved
    </p>
    <p className='pb-3 m-0 text-center'>
      Designed and developed by{" "}
      <a
        href="https://fatihahhalalfood.com"
        style={{ color: '#000000' }}
        target="_blank"
        rel="noopener noreferrer"
      >
        Rashid Shahinur
      </a>
    </p>
  </footer>
  )
}

export default Footer;
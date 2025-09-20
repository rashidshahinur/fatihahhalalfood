import React from 'react';
import './Header.css';
import Carousel from 'react-bootstrap/Carousel';
import MenuBtn from '../MenuBtn/MenuBtn';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
        <Carousel className='carousel-fade mt-5 mt-sm-0'>
            <Carousel.Item className='carousel-item1 vh-100'>
                <Carousel.Caption className='h-100 pb-0'>
                    <div className="row h-100">
                        <div className='col-xl-7 d-flex flex-column align-items-center align-items-md-start justify-content-center mt-5'>
                            <h2 className='fw-bold fs-3 text-center text-md-start'>Welcome to</h2>
                            <h1 className='text-capitalize fw-bold text-center text-md-start'>Fatihah Halal Food</h1>
                            <p className='mb-4 text-center text-md-start'>Welcome to Fatihah Halal Food in Ibaraki, Japan — a place where authentic halal flavors meet warm hospitality. Our restaurant is dedicated to making every meal special, bringing you comfort, culture, and unforgettable taste.</p>
                            <div className='d-flex flex-column flex-sm-row'>
                                <MenuBtn />
                                <Link to='/contact'>
                                    <button type='button' className='btn btn-outline-light btn-lg rounded-0 text-capitalize mx-2 shadow'>Contact us</button>
                                </Link>
                            </div>
                        </div>
                        <div className='col-xl-5 d-none d-xl-block'></div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='carousel-item2 vh-100'>
                <Carousel.Caption className='h-100 pb-0'>
                    <div className="row h-100">
                        <div className='col-xl-7 d-flex flex-column align-items-center align-items-md-start justify-content-center mt-5'>
                            <h2 className='fw-bold fs-3 text-center text-md-start'>Welcome to</h2>
                            <h1 className='text-capitalize fw-bold text-center text-md-start'>Fatihah Halal Food</h1>
                            <p className='mb-4 text-center text-md-start'>At Fatihah Halal Food, we believe every meal should be more than food — it should be an experience. Located in Ibaraki, Japan, we serve authentic halal dishes that turn ordinary gatherings into unforgettable memories. ファティハ・ハラール・フードでは、食事は単なる食べ物ではなく、体験であるべきだと考えています。
私たちは日本の茨城にて、本格的なハラール料理を提供し、日常の集まりを忘れられない思い出へと変えていきます。</p>
                            <div className='d-flex flex-column flex-sm-row'>
                                <MenuBtn />
                                <Link to='/contact'>
                                    <button type='button' className='btn btn-outline-light btn-lg rounded-0 text-capitalize mx-2 shadow'>Contact us</button>
                                </Link>
                            </div>
                        </div>
                        <div className='col-xl-5 d-none d-xl-block'></div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='carousel-item3 vh-100'>
                <Carousel.Caption className='h-100 pb-0'>
                    <div className="row h-100">
                        <div className='col-xl-7 d-flex flex-column align-items-center align-items-md-start justify-content-center mt-5'>
                            <h2 className='fw-bold fs-3 text-center text-md-start'>Welcome to</h2>
                            <h1 className='text-capitalize fw-bold text-center text-md-start'>Fatihah Halal Food</h1>
                            <p className='mb-4 text-center text-md-start'>Welcome to Fatihah Halal Food in Ibaraki, Japan — where authentic halal cuisine meets warm hospitality. Every dish is prepared with care, bringing comfort, flavor, and joy to your special moments.</p>
                            <div className='d-flex flex-column flex-sm-row'>
                                <MenuBtn />
                                <Link to='/contact'>
                                    <button type='button' className='btn btn-outline-light btn-lg rounded-0 text-capitalize mx-2 shadow'>Contact us</button>
                                </Link>
                            </div>
                        </div>
                        <div className='col-xl-5 d-none d-xl-block'></div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </header>
  )
}

export default Header;
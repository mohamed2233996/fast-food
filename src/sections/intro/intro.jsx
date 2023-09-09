import React from 'react';
import './intro.css'
import { BsCartPlusFill,BsChevronCompactRight } from "react-icons/bs";

const Intro = () => {
    return (
        <div className='intro'>
            <div className="container">
                <div className="row">
                    <div className='col-md-5 col-sm-6'>
                        <h1 className='intro-haeding'>Good food choices are good investments.</h1><br />
                        <p className='intro-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>
                        <div className="intro-btns d-grid gap-2 d-md-flex justify-content-md-start">
                            <a className='btn-m fw-bold' href="#explore">
                                Order Now <BsCartPlusFill /></a>
                            <a className='btn-m-light fw-bold' href="#about">
                                Learn More <BsChevronCompactRight /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intro;

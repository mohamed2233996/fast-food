import React from 'react';
import './footer.css';
import { BsFacebook ,BsTwitter ,BsTwitch ,BsLinkedin, BsInstagram, BsDribbble } from "react-icons/bs";

const Footer = () => {
    return (
        <footer className='section-m'> 
            <div className='container text-center'>
                <div className="row">
                    <div className='col-12 footer-p'>
                        <a href="#">Register</a>
                        <a href="#">Forum</a>
                        <a href="#">Affiliate</a>
                        <a href="#">FAQ</a>
                    </div>
                    <div className='col-12 footer-links'>
                        <a href="#"><BsFacebook /></a>
                        <a href="#"><BsTwitter /></a>
                        <a href="#"><BsTwitch /></a>
                        <a href="#"><BsLinkedin /></a>
                        <a href="#"><BsInstagram /></a>
                        <a href="#"><BsDribbble /></a>
                    </div>
                </div>
                <p className='copyrition-p'>© 2024. Fast Food. All rights reserved.By Medo</p>
            </div>
        </footer>
    );
}

export default Footer;

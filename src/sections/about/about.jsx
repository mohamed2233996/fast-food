import React from 'react';
import './about.css'
import aboutImg1 from '../../assets/9.png'
import aboutImg2 from '../../assets/2.png'
import { BsFillBookmarkCheckFill } from "react-icons/bs";

const About = () => {
    return (
        <div className='about section-m'>
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <img src={aboutImg1} alt="" />
                    </div>
                    <div className="col-md-5 mt-3 mt-md-0">
                    <h3 className='about-heading'>Good food choices are good investments.</h3>
                        <p className='about-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>
                        <a className='btn-m fw-bold' href="#">Learn More</a>
                    </div>
                </div>
            </div>
            <div className="container part">
                <div className="row">
                    <div className="col-md-5">
                    <h3 className='about-heading'>We make everything by hand with the best possible ingredients.</h3>
                        <p className='about-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <ul className='about-list'>
                            <li><span><BsFillBookmarkCheckFill /></span>purus a odio finibus bibendum.</li>
                            <li><span><BsFillBookmarkCheckFill /></span>Erat volutpat aliquet imperdiet.</li>
                            <li><span><BsFillBookmarkCheckFill /></span>Etiam sed dolor ac diam volutpat.</li>
                        </ul>
                        <a className='btn-m fw-bold' href="#">Learn More</a>
                    </div>
                    <div className="col-md-7">
                        <img src={aboutImg2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;

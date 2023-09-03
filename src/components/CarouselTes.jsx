import React from 'react';
import './CarouselTes.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import imgt1 from '../assets/t1.jpg'
import imgt2 from '../assets/t2.jpg'

const CarouselTes = () => {
    return (
        <Carousel showThumbs={false}>
            <div className='carousel-m'>
                <div className='carousel-img'>
                    <img src={imgt2} alt="" />
                </div>
                <p className='carousel-text'>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live."</p>
                <span className='auther'>Simab Dave - Web Designer</span>
            </div>
            <div className='carousel-m'>
                <div className='carousel-img'>
                    <img src={imgt1} alt="" />
                </div>
                <p className='carousel-text'>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live far from the countries Vokalia."</p>
                <span className='auther'>Johnthan Doe - UX Designer</span>
            </div>
            <div className='carousel-m'>
                <div className='carousel-img'>
                    <img src={imgt2} alt="" />
                </div>
                <p className='carousel-text'>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live."</p>
                <span className='auther'>Simab Dave - Web Designer</span>
            </div>
        </Carousel>
    );
}

export default CarouselTes;

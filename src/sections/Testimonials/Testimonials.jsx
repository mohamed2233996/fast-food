import React from 'react';
import './Testimonials.css'
import CarouselTes from '../../components/CarouselTes';

const Testimonials = () => {
    return (
        <div className='Testimonials  section-m'>
            <div className='container'>
                <h2 className='Testimonials-haeding'>Testimonials</h2>
                <div className="row">
                    <CarouselTes />
                </div>
            </div>
        </div>
    );
}

export default Testimonials;

import React from 'react';
import './parallax.css'

const Parallax = () => {
    return (
        <div className='parallax section-m'>
            <div className='overflow-m'></div>
            <div className='container text-center'>
                <div className="row position-relative align-items-center">
                    <div className="col-md-8">
                        <h2 className='parallax-haedind'>Baked fresh daily by bakers with passion.</h2>
                    </div>
                    <div className="col-md-4 mt-3">
                        <a className='btn-m' href="">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Parallax;

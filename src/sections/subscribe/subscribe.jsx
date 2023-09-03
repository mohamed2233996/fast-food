import React from 'react';
import './subscribe.css'

const Subscribe = () => {
    return (
        <div className='subscribe section-m'>
            <div className='container text-center'>
                <h2 className='subscribe-haeding'>Hurry up! Subscribe our newsletter and get 25% Off</h2>
                <p className='subscribe-text'>Limited time offer for this month. No credit card required.</p>
                <form action="#">
                <div className='row align-items-center'>
                    <div className='col-md-8'>
                        <input className="input-m" placeholder="Email Address here" name="email" id="eaddress" data-validate="validate(required, email)" type="email" />
                    </div>
                    <div className="col-md-4">
                        <button className='btn-m'>Subscribe</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    );
}

export default Subscribe;

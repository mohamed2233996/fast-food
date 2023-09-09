import React from 'react';
import './header.css';
import logo from '../assets/logo.png'


const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
                <div className="container-fluid">
                    <a href="/" className='logo' ><img src={logo}></img></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav nav">
                            <li><a href="">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href='#foods'>Explore Foods</a></li>
                            <li><a href='#Reviews'>Reviews</a></li>
                            <li><a href='#FAQ'>FAQ</a></li>
                        </ul>
                    </div>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn-m" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </>
    );
}

export default Header;

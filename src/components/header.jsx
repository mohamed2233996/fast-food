import React from 'react';
import './header.css';
import logo from '../assets/logo.png'
import { Link } from "react-router-dom";


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
                            <li><Link to="/"><p>Home</p></Link></li>
                            <li><Link to="/about"><p>About Us</p></Link></li>
                            <li><Link to='/foods'><p>Explore Foods</p></Link></li>
                            <li><Link to='/Reviews'><p>Reviews</p></Link></li>
                            <li><Link to='/FAQ'><p>FAQ</p></Link></li>
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

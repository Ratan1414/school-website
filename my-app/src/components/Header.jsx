import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Layer1 from '../assets/Layer_1.png';
function Header() {
    return (
        <>

            <nav className='page_nav'>
                <div className="logo_name">
                    <Link to="/">
                        <img className="school_logo" src={Layer1} alt="" />
                        <h1 className="school_name">Baba Fateh Singh School </h1>
                    </Link>
                </div>
                <ul className="nav_links">
                    <li>
                        <Link to="/About_us">ABOUT US</Link>
                    </li>
                    <li>
                        <Link to="/Academics">ACADEMICS</Link>
                    </li>
                    <li>
                        <Link to="/Admissions">ADMISSIONS</Link>
                    </li>
                    <li>
                        <Link to="/Events">EVENTS</Link>
                    </li>
                    <li>
                        <Link to="/Volunteer">VOLUNTEER</Link>
                    </li>
                    <li>
                        <Link to="/Contact_us">CONTACT US</Link>
                    </li>
                    <li>
                        <Link to="/Donate">DONATE</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Header
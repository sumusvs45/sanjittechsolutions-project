import React, { useState } from 'react';
import logo from '../assets/logo.webp';
import '../Components/Navbar.css';
import { MdMenu } from "react-icons/md";
 
const Navbar = () => {
    const [open, setOpen] = useState(false);  // Initially hidden
 
    const toggleMenu = () => {
        setOpen(!open);  // Toggle between true and false
    };
 
    return (
        <>
            <header>
                <nav className='navbar'>
                    <div className="nav-left">
                        <img src={logo} alt="logo" className='logo' />
                    </div>
 
                    <div className="nav-right">
                        <ul className={`nav-links ${open ? 'show' : ''}`}>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Services</li>
                            <li>Contact us</li>
                        </ul>
 
                        <div className="icon" onClick={toggleMenu}>
                            <MdMenu />
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};
 
export default Navbar;
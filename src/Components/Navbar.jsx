import React, { useState } from 'react';
import logo from '../assets/logo.png'
import '../Components/Navbar.css'
import { MdMenu } from "react-icons/md";
const Navbar = () => {
    const [open,setopen]=useState("false")
    return (
        <>
        <header>
            <nav className='navbar'>
                <div className="nav-left">
                 <img src={logo} alt="logo" className='logo' />

                </div>
                <div className="nav-right">
                    {
                        open=='true'?(<ul className='nav-links'>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Services </li>
                            <li>Contact us</li>
                           
    
                        </ul>):""
                    }
                  
                    <div className="icon">
                          <MdMenu onClick={console.log("event triggered")} />
                        </div>

                </div>
            </nav>

        </header>
            
        </>
    );
};

export default Navbar;
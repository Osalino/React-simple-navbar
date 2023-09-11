import { FaTimes, FaBars } from 'react-icons/fa';
import { useRef } from 'react';
import React from 'react'
import '../App.css'

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        // navRef.current ? (navRef.current.style.display="flex") : null;
        navRef.current.classList.toggle('responsive_nav')
    }

    return (
        <header>
            <h3>Logo</h3>
            <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">My work</a>
                <a href="/#">Blog</a>
                <a href="/#">About Me</a>
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className='nav-btn' onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;
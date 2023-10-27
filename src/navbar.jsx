import './navbar.css'
import React, { useState } from 'react';
import { Link } from 'react-scroll';


function nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div >
            <nav className="nav fixed-top">
                <div className="menu" onClick={() => {
                    setMenuOpen(!menuOpen)
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={`ul ${menuOpen ? "open" : ""}`}>
                    <li>
                        <Link to="home" spy={true} offset={-300} smooth={true} duration={200} className="a">Home</Link>
                    </li>
                    <li>
                        <Link to="about" spy={true} offset={-50} smooth={true} duration={200} className="a">About</Link>
                    </li>
                    <li>
                        <Link to="projects" spy={true} offset={50} smooth={true} duration={200} className="a" >Projects</Link>
                    </li>
                    <li>
                        <Link to="contacts" spy={true} offset={50} smooth={true} duration={200} className="a" >Contact</Link>
                    </li>
                </ul>
            </nav>
        </div >
    );
}

export default nav;


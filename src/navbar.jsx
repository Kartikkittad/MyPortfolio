
import './navbar.css'
import React, { useState } from 'react';
import { Link } from 'react-scroll';



function nav() {



    return (
        <div >
            <nav className="nav fixed-top" >

                <ul>
                    {/* <li>
                        <a href="/home" className="home" id="home">Home</a>
                    </li>
                    <li>
                        <a href="/about" className="about" id="about">About</a>
                    </li>
                    <li>
                        <a href="/projects" id="projects">Projects</a>
                    </li>
                    <li>
                        <a href="/contact" id="contact">Contact</a>
                    </li> */}
                    <li>
                        <Link to="home" spy={true} offset={-50} smooth={true} duration={200} className="a">Home</Link>
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


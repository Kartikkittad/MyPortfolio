
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
                        <a href="/" className="a">Home</a>
                    </li>
                    <li>
                        <Link to="about" smooth={true} duration={200} className="a">About</Link>
                    </li>
                    <li>
                        <a className="a" href="/projects">Projects</a>
                    </li>
                    <li>
                        <a className="a" href="/contacts" >Contact</a>
                    </li>
                </ul>
            </nav>
        </div >
    );
}

export default nav;


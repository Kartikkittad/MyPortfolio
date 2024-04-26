import './HomePage.css'
import Nav from './navbar'
import { Link } from 'react-scroll';

function HomePage() {
    return (
        <>
            <Nav />
            <div id="home">
                <section className="head">
                    <div className="container">
                        <div className="info">
                            <h3 className="name">Hey, I'm Kartik Kittad</h3>
                            <h1 className="desc">Fullstack <br />Web Developer <br /> And Programmer</h1>
                            <Link to="contacts" spy={true} offset={50} smooth={true} duration={200} className="btn1">Get in touch</Link>
                        </div>
                        <img src="https://arpanneupane.com/_next/image?url=%2Fprogrammer-gif.gif&w=640&q=75" className="img" />
                    </div>
                </section>
            </div>
        </>
    )
}

export default HomePage;
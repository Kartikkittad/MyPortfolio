import './HomePage.css'
import About from './AboutPage';
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
} from 'mdb-react-ui-kit';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';


function HomePage() {


    return (
        <div id="home">

            <section className="head">

                <div className="container">
                    <h3 className="name">Hey, I'm Kartik Kittad</h3>
                    <h1 className="desc">I'm Fullstack <br />Web Developer <br /> And Programmer</h1>
                    <button className="btn1">Get in touch</button>
                </div>
            </section>
            <section className="about" >
                <About />
            </section>
            <MDBFooter className='text-center foot' color='dark' >
                <section className='mb-4 border-top pt-4'>
                    <div className='me-5 d-none d-lg-block'>
                        <span>Get connected with me on social networks:</span>
                    </div>

                    <div className="pt-3">
                        <a href='https://www.instagram.com/aerosth3tics/' className='me-4 text-reset'>
                            <MDBIcon fab icon="instagram" className="fa-lg" />
                        </a>
                        <a href='https://www.linkedin.com/in/kartik-kittad-40351023a/' className='me-4 text-reset'>
                            <MDBIcon fab icon="linkedin" className="fa-lg" />
                        </a>
                        <a href='https://github.com/Kartikkittad' className='me-4 text-reset'>
                            <MDBIcon fab icon="github" className="fa-lg" />
                        </a>
                        <a href='https://discord.com/users/533492677212110861' className='me-4 text-reset'>
                            <MDBIcon fab icon="discord" className="fa-lg" />
                        </a>
                    </div>
                </section>
                <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    2023 Copyright © Kartik Kittad
                </div>
            </MDBFooter>

        </div>
    )
}


export default HomePage;
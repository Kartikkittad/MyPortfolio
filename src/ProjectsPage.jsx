import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Projects.css'
import { BsArrowBarRight } from "react-icons/bs";
import Nav from './navbar'
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


function Projects() {

    return (
        <>
            <Nav />
            <div id="projectsPro">
                <div className="headersPro">
                    <h2 className="headPro1">Projects</h2>
                    <p className="para1">3 totally completed projects with project video and GitHub link</p>
                </div>
                <Container>
                    <Row>
                        <Col className="embed-responsive embed-responsive-16by9">
                            <iframe width="400" height="200" className="embed-responsive-item" src="https://www.youtube.com/embed/wmpkXJSdbmM?si=GNudCzlUMTWwUUwI" allowFullScreen></iframe>
                            <h2 className="headPro2">
                                CampSearch
                            </h2>
                            <p className="paraPro2">CampSearch is a web application that allows you to view campgrounds with a short description. Once you login or signup you can begin to create your own campgrounds that includes a title, image, address and short description. Explore the beautiful world through our website.
                            </p>
                            <a className="case" >Read case study ➜</a>
                            <br />
                            <a href="https://github.com/Kartikkittad/CampSearch">
                                <button className="btnPro">Visit GitHub</button>
                            </a>
                        </Col>
                        <Col className="embed-responsive embed-responsive-16by9">
                            <iframe width="400" height="200" className="embed-responsive-item" src="https://www.youtube.com/embed/0Zw2ez0OANo?si=dkk0ZFC15_BTa_Fw" allowFullScreen></iframe>
                            <h2 className="headPro3">EmojiTrace-NLP</h2>
                            <p className="paraPro3">Developed an interactive web app for real-time Emotion Detection using NLP and machine learning Techniques. Implemented emoji visualization based on predicted emotions and incorporated JS confetti for an engaging user experience.</p>
                            <a className="case" >Read case study ➜</a>
                            <br />
                            <a href="https://github.com/Kartikkittad/EmotionTrace-NLP">
                                <button className="btnPro">Visit GitHub</button>
                            </a>
                        </Col>
                        <Col className="embed-responsive embed-responsive-16by9">
                            <iframe width="400" height="200" className="embed-responsive-item" src="https://www.youtube.com/embed/kanR7in_wmA?si=qWVlUKPRL2f9wS0C" allowFullScreen></iframe>
                            <h2 className="headPro4">Product Comparator</h2>
                            <p className="paraPro4">A Product Comparison is a simpler version of Competitor Analysis. It compares two products in a way that the readers can grasp instantly. By comparing prices, features, and of different products or services, consumers can gather the necessary information to evaluate their options.</p>
                            <a className="case" >Read case study ➜</a>
                            <br />
                            <a href="https://github.com/Kartikkittad/Product-Comparator">
                                <button className="btnPro">Visit GitHub</button>
                            </a>
                        </Col>
                    </Row>
                </Container >
            </div>

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
        </>
    )
}

export default Projects;



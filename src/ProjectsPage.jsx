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
import Campground from '../public/assets/campground.png';
import emotion from '../public/assets/emotion.png';
import product from '../public/assets/product.png';
import study from '/assets/study.png';
import destov from '/assets/Destov.png';

function Projects() {

    return (
        <div id="projects">
            <div id="projectsPro">
                <div className="headersPro">
                    <h2 className="headPro1">projects</h2>
                    <p className="para1">5 totally completed projects with source code</p>
                </div>
                <Container>
                    <Row className="rowPro">
                        <Col style={{ maxWidth: '446px' }} className="embed-responsive first-row embed-responsive-16by9 shadow-4 rounded-8">
                            <img className="project-img" width="425px" height="200" src={Campground} />
                            <h2 className="headPro2">
                                CampSearch
                            </h2>
                            <p className="paraPro2">CampSearch is a web application that allows you to view campgrounds with a short description. Once you login or signup you can begin to create your own campgrounds that includes a title, image, address and short description. Explore the beautiful world through our website.
                            </p>
                            <div className="skillsContainer">
                                <div className="skill d-inline p-1">
                                    <span class="node">Node.js</span>
                                </div>
                                <div className="skill d-inline p-1">
                                    <span class="node">JavaScript</span>
                                </div>
                                <div className="skill d-inline p-1">
                                    <span class="node">HTML/CSS</span>
                                </div>
                                <div className="skill d-inline p-1">
                                    <span class="node">mongoDB</span>
                                </div>
                            </div>

                            <br />
                            <a href="https://github.com/Kartikkittad/CampSearch">
                                <button className="btnPro">Source Code</button>
                            </a>
                        </Col >
                        <Col style={{ maxWidth: '446px' }} className="embed-responsive  embed-responsive-16by9 shadow-4 rounded-8">
                            <img className="project-img" width="425px" height="200" src={emotion} />
                            <h2 className="headPro3">EmojiTrace-NLP</h2>
                            <p className="paraPro3">Developed an interactive web app for real-time Emotion Detection using NLP and machine learning Techniques. Implemented emoji visualization based on predicted emotions and incorporated JS confetti for an engaging user experience.</p>
                            <div className="skillsContainer">
                                <div className="skill d-inline p-1">
                                    <span class="node">Node.js</span>
                                </div>
                                <div className="skill d-inline p-1">
                                    <span class="node">JavaScript</span>
                                </div>
                                <div className="skill d-inline p-1">
                                    <span class="node">Python</span>
                                </div>
                                <div className="skill d-inline p-1">
                                    <span class="node">NLP</span>
                                </div>
                                <div className="skill d-inline p-1">
                                    <span class="node">HTML/CSS</span>
                                </div>
                                <div className="skill d-inline p-1">
                                    <span class="node">Figma</span>
                                </div>
                            </div>
                            <br />
                            <a href="https://github.com/Kartikkittad/EmotionTrace-NLP">
                                <button className="btnPro">Source Code</button>
                            </a>
                        </Col>
                        <Col style={{ maxWidth: '446px' }} className="embed-responsive  embed-responsive-16by9 shadow-4 rounded-8">
                            <img className="project-img" width="425px" height="200" src={product} />
                            <h2 className="headPro4">Product Comparator</h2>
                            <p className="paraPro4">A Product Comparison is a simpler version of Competitor Analysis. It compares two products in a way that the readers can grasp instantly. By comparing prices, features, and of different products or services, consumers can gather the necessary information to evaluate their options.</p>
                            <div className="skillsContainer">
                                <div className="skill d-inline p-1">
                                    <span class="node">Node.js</span>
                                </div>
                                <div className="skill d-inline p-1">
                                    <span class="node">JavaScript</span>
                                </div>
                                <div className="skill d-inline p-1">
                                    <span class="node">HTML/CSS</span>
                                </div>
                                <div className="skill d-inline p-1">
                                    <span class="node">Passport.js</span>
                                </div>
                                <div className="skill d-inline p-1">
                                    <span class="node">mongoDB</span>
                                </div>
                            </div>
                            <br />
                            <a href="https://github.com/Kartikkittad/Product-Comparator">
                                <button className="btnPro">Source Code</button>
                            </a>
                        </Col>
                        <Col style={{ maxWidth: '446px' }} className="embed-responsive embed-responsive-16by9 shadow-4 rounded-8">
                            <img className="project-img" width="425px" height="200" src={study} />
                            <h2 className="headPro4">Study Together</h2>
                            <p className="paraPro4">StudyTogether, a dynamic online platform crafted with ReactJS and integrated APIs, facilitates collaborative learning for students. Join a vibrant community, access shared study resources, and engage in interactive study sessions to enhance your educational experience.</p>
                            <div className="skillsContainer">
                                <div className="skill d-inline p-1">
                                    <span class="node">React.js</span>
                                </div>
                                <div className="skill d-inline p-1">
                                    <span class="node">JavaScript</span>
                                </div>
                                <div className="skill d-inline p-1">
                                    <span class="node">HTML/CSS</span>
                                </div>
                                <div className="skill d-inline p-1">
                                    <span class="node">Web RTC</span>
                                </div>
                                <div className="skill d-inline p-1">
                                    <span class="node">Clerk</span>
                                </div>
                                <div className="skill d-inline p-1">
                                    <span class="node">Figma</span>
                                </div>
                            </div>
                            <br />
                            <a href="https://github.com/Kartikkittad/StudyTogether">
                                <button className="btnPro">Source Code</button>
                            </a>
                        </Col>
                        <Col lg={6} className="embed-responsive second-row embed-responsive-16by9 shadow-4 rounded-8">
                            <img className="project-img" height="200" src={destov} />
                            <h2 className="headPro4">Cargo Tracking</h2>
                            <p className="paraPro4">Cargo Tracking is a web application that simplifies logistics with container, airwaybill, and bill of lading tracking. It provides real-time visibility into shipment status for streamlined management. Users can monitor containers, track air cargo, and manage ocean cargo documentation easily. With its intuitive interface, Cargo Tracking enhances supply chain transparency and efficiency.</p>
                            <div className="skillsContainer">
                                <div className="skill d-inline p-1">
                                    <span class="node">Node.js</span>
                                </div>
                                <div className="skill d-inline p-1">
                                    <span class="node">JavaScript</span>
                                </div>
                                <div className="skill d-inline p-1">
                                    <span class="node">HTML/CSS</span>
                                </div>
                                <div className="skill d-inline p-1">
                                    <span class="node">React.js</span>
                                </div>
                                <div className="skill d-inline p-1">
                                    <span class="node">Express.js</span>
                                </div>
                                <div className="skill d-inline p-1">
                                    <span class="node">mongoDB</span>
                                </div>
                            </div>
                            <br />
                            <a href="https://github.com/Kartikkittad/">
                                <button className="btnPro">Source Code</button>
                            </a>
                        </Col>
                    </Row >
                </Container >
            </div>
        </div >
    )
}

export default Projects;



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
        <div id="projects">
            <div id="projectsPro">
                <div className="headersPro">
                    <h2 className="headPro1">Projects</h2>
                    <p className="para1">3 totally completed projects with project video and GitHub link</p>
                </div>
                <Container>
                    <Row className="rowPro">
                        <Col className="embed-responsive embed-responsive-16by9 shadow-4 rounded-8">
                            <iframe width="400" height="200" className="embed-responsive-item" src="https://www.youtube.com/embed/wmpkXJSdbmM?si=GNudCzlUMTWwUUwI" allowFullScreen></iframe>
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
                                <button className="btnPro">Visit GitHub</button>
                            </a>
                        </Col >
                        <Col className="embed-responsive embed-responsive-16by9 shadow-4 rounded-8">
                            <iframe width="400" height="200" className="embed-responsive-item" src="https://www.youtube.com/embed/0Zw2ez0OANo?si=dkk0ZFC15_BTa_Fw" allowFullScreen></iframe>
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
                                <button className="btnPro">Visit GitHub</button>
                            </a>
                        </Col>
                        <Col className="embed-responsive embed-responsive-16by9 shadow-4 rounded-8">
                            <iframe width="400" height="200" className="embed-responsive-item" src="https://www.youtube.com/embed/kanR7in_wmA?si=qWVlUKPRL2f9wS0C" allowFullScreen></iframe>
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
                            </div>
                            <br />
                            <a href="https://github.com/Kartikkittad/Product-Comparator">
                                <button className="btnPro">Visit GitHub</button>
                            </a>
                        </Col>
                    </Row >
                </Container >
            </div>
        </div >
    )
}

export default Projects;



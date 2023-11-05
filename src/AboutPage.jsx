import NavigationMenu from './navbar'
import './About.css'
import bg from '/assets/web.svg'
import bg2 from '/assets/project.svg'
import bg3 from '/assets/code.svg'
import bg4 from '/assets/Saly12.svg'
import res from '/assets/KartikHackerrankResume.pdf'

export default function About() {

    return (
        <div id="about">
            <div className="abo">
                <div id="about" className="info">
                    <h2 className="header">About me</h2>
                    <p className="para">I'm Kartik Kittad currently pursuing my B.tech degree in ENTC<br />My Major
                        is in ENTC and Minor in CSE</p>
                </div>
                <div className="skills">
                    <div className="frontend">
                        <img src={bg} className="webImg" />
                        <h3 className="headers">Web <br />Development</h3>
                        <p className="webInfo">Building responsive and user friendly websites <br /> for optimal experience and faster development.</p>
                    </div>
                    <div className="projects">
                        <img src={bg2} className="proImg" />
                        <h3 className="headers">Projects</h3>
                        <p className="webInfo">Total 3 projects completed using Machine learning and various languages.</p>
                    </div>
                    <div className="problem">
                        <img src={bg3} className="proImg" />
                        <h3 className="headers">Problem Solving</h3>
                        <p className="problemPara">Solved and coding several algorithmic problems. Enhancing proficency in Algorithms and Data Structures.</p>
                    </div>
                    <div className="design">
                        <img src={bg4} className="proImg" />
                        <h3 className="headers">Graphics <br /> Design</h3>
                        <p className="designPara">Created visually appealing products that convey certain messages or information using Adobe Illustrator, Photoshop and Figma.</p>
                    </div>
                </div>

            </div>
            <div className="resume">
                <h2 className="head">Take a look at my resume</h2>
                <a href={res} download>
                    <button className="btn2" href={res} download>Download Resume</button>
                </a>
            </div >

        </div>
    )
}
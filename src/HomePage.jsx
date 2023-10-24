import './HomePage.css'
import Nav from './navbar'


function HomePage() {


    return (
        <>
            <Nav />
            <div id="home">

                <section className="head">

                    <div className="container">
                        <h3 className="name">Hey, I'm Kartik Kittad</h3>
                        <h1 className="desc">Fullstack <br />Web Developer <br /> And Programmer</h1>
                        <button className="btn1">Get in touch</button>
                    </div>
                </section>

            </div >
        </>
    )
}


export default HomePage;
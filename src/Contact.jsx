import './Contact.css'


function Contact() {

    return (
        <div id="contacts">
            <div>
                <h1 className="contHead">Contact Me</h1>
                <div className="contactCont " >
                    <div className="email colmun" >
                        <i class="far fa-lg fa-envelope"></i>
                        <a className="emailA" href="mailto:kartikkittad85@gmail.com">kartikkittad85@gmail.com</a>
                    </div>

                    <div className="phone colmun" >
                        <i class="fas fa-lg fa-phone"></i>
                        <a>7028101939</a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Contact;
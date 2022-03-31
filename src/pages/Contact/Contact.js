import'./Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faFacebookMessenger, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";



const Contact = () => {
    const mail = <FontAwesomeIcon icon={faEnvelope} />
    const github= <FontAwesomeIcon icon={faGithub} />
    const linkedin= <FontAwesomeIcon icon={faLinkedin} />
    const messenger= <FontAwesomeIcon icon={faFacebookMessenger} />
    return (
        <div>
            <div className="info mx-5 d-flex justify-content-center mt-5">
                <h1>Contact</h1>
                </div>
                <div className="rectnt-work mb-5 mx-4"> 
                <a href="mailto:rijwansakib1@gmail.com"><button type="button" className="glow-on-hover btn btn-danger px-5 py-2 mx-4" >{mail} Mail</button></a>
                <a href="https://github.com/rijwansakib"><button type="button" className="glow-on-hover btn btn-danger px-5 py-2 mx-4" >{github}Github</button></a>
                <a href="https://www.linkedin.com/in/rijwan-sakib-88993a182/"><button type="button" className="glow-on-hover btn btn-danger px-5 py-2 mx-4" >{linkedin}Linkedin</button></a>
                <a href="https://msng.link/o/?RizwanAhmedSakib=fm"><button type="button" className="glow-on-hover btn btn-danger px-5 py-2 mx-4" >{messenger}Messenger</button></a>
                </div>   
        </div>
    );
};

export default Contact;
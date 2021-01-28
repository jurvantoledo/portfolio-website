import React from "react"
import { 
    Card, 
    Container, 
    Jumbotron,
    Col, 
} from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

import ReactLogo from "./Logo/react-logo.png"
import ReduxLogo from "./Logo/redux-logo.png"


import "./about.scss"
import Foto from "./foto-jur.jpg"


export default function About() {
    return(
        <>
        <Container 
            className="about-me-container"
        >
           <Container className="about-cards"             
            as={Col} 
            md={{ span: 12}}
            >
            <Card
            as={Col} 
            md={{ span: 5 }}
            >
             <figure>
              <img 
               src={Foto} 
               alt="jur" />
             </figure>
            </Card>
            <Card
            as={Col} 
            md={{ span: 7 }}
            >
              <h3>
                About Me <br/>
              <small>Junior Full-Stack Developer</small>
              </h3>
                <p>
                    I'm <strong>Jur van Toledo</strong> a former truck driver trying to become a developer.
                    recently I graduated at the Codaisseur's Academy as Fullstack Developer, 
                    passionated in creating awesome web- and mobile applications. 
                    I am an enthusiastic developer looking for a new challenge to develop/learn more skills.
                </p>
            <div className="social-icons">
            <h4>Socials</h4>
             <a target="_blank" rel="noreferrer" href="https://github.com/jurvantoledo">
             <FontAwesomeIcon icon={faGithub} />
             </a>
             <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jurvantoledo/">
             <FontAwesomeIcon icon={faLinkedin} />
             </a>
            </div>
            </Card>
           </Container>
           <h3>Technologies</h3>
           <Container
            as={Col} 
            md={{ span: 12}}
            className="techStack"
           >
           <Card
             as={Col} 
             md={{ span: 2 }}
             className="technology"
           >
            <figure>
               <img src={ReactLogo} alt="react" />
            </figure>
           </Card>
           <Card
             as={Col} 
             md={{ span: 2 }}
             className="technology"
           >
             <figure>
               <img src={ReduxLogo} alt="redux" />
            </figure>
           </Card>
           </Container>
        </Container>
        </>
    )
}
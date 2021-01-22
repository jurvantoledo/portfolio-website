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

import "./about.scss"
import Foto from "./foto-jur.jpg"


export default function About() {
    return(
        <>
        <Container 
            className="about-me-container"
            as={Col} 
            md={{ span: 12}}
        >
            <Jumbotron>
              <h2>About Me</h2>
            </Jumbotron>
           <Container className="about-cards"             
            as={Col} 
            md={{ span: 12}}
            >
            <Card
            as={Col} 
            md={{ span: 6 }}
            >
             <figure>
              <img 
               src={Foto} 
               alt="jur-image" />
             </figure>
            </Card>
            <Card
            as={Col} 
            md={{ span: 6 }}
            >
                <p>
                    recently I graduated at the Codaisseur's Academy as Fullstack Developer, 
                    passionated in creating awesome web- and mobile applications. 
                    I am an enthusiastic developer looking for a new challenge to develop/learn more skills.
                </p>
            <div className="social-icons">
            <h4>Socials</h4>
             <a target="_blank" href="https://github.com/jurvantoledo">
             <FontAwesomeIcon icon={faGithub} />
             </a>
             <a target="_blank" href="https://www.linkedin.com/in/jurvantoledo/">
             <FontAwesomeIcon icon={faLinkedin} />
             </a>
            </div>
            </Card>
           </Container>
        </Container>
        </>
    )
}
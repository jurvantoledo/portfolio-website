import React from "react"
import { 
    Card, 
    Container, 
    Col,
    Jumbotron, 
    Button
} from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

import ReactLogo from "./Logo/react-logo.png"
import ReduxLogo from "./Logo/redux-logo.png"
import PostgresLogo from "./Logo/postgresQL-logo.png"
import NodeJSLogo from "./Logo/nodeJS-logo.png"
import HtmlLogo from "./Logo/html-logo.png"
import CssLogo from "./Logo/css-logo.png"
import JsLogo from "./Logo/JavaScript_logo.png"
import TsLogo from "./Logo/Typescript_logo_2020.png"
import ScssLogo from "./Logo/sass-logo.png"
import ExpressLogo from "./Logo/express-logo.png"
import GitLogo from "./Logo/git-logo.png"


import Foto from "./foto-jur.jpg"
import "./about.scss"

export default function About() {
    return(
        <>
        <Container 
            className="about-me-container"
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
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
            <div className="about-me-title">
              <h3>
                <a id="about-me">About Me</a> <br/>
              <small>Junior Full-Stack Developer</small>
              </h3>
            </div>
                <p>
                    I'm <strong>Jur van Toledo</strong> a former truck driver changed to developer.
                    Recently I graduated at the Codaisseur's Academy as Fullstack Developer, 
                    passionated in creating awesome web- and mobile applications. 
                    I am an enthusiastic developer looking for a new challenge to develop/learn more skills.
                </p>
                <p><strong>Email:</strong>
                <a href="mailto:jurvantoledo@live.nl">
                <Button className="type-3">
                  jurvantoledo@live.nl
                  </Button>
                </a>
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
        </Container>

        <Container className="techContainer">
         <Jumbotron className="title">
           <h3><a id="technologies">Technologies</a></h3>
         </Jumbotron>
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
                <img src={JsLogo} alt="JavaScript" />
               </figure>
               <div className="neon-light"></div>
           </Card>
           <Card
            as={Col} 
            md={{ span: 2 }}
            className="technology"
           >

               <figure>
                <img src={TsLogo} alt="TypeScript" />
              </figure>
              <div className="neon-light"></div>
           </Card>
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
           <Card
             as={Col} 
             md={{ span: 2 }}
             className="technology"
           >
             <figure>
               <img src={HtmlLogo} alt="HTML" />
            </figure>
           </Card>
           <Card
             as={Col} 
             md={{ span: 2 }}
             className="technology"
           >
             <figure>
               <img src={CssLogo} alt="CSS" />
            </figure>
           </Card>
           <Card
             as={Col} 
             md={{ span: 2 }}
             className="technology"
           >
             <figure>
               <img src={ScssLogo} alt="Scss" />
            </figure>
           </Card>
           <Card
             as={Col} 
             md={{ span: 2 }}
             className="technology"
           >
             <figure>
               <img src={PostgresLogo} alt="postgresQl" />
            </figure>
           </Card>
           <Card
             as={Col} 
             md={{ span: 2 }}
             className="technology"
           >
             <figure>
               <img src={ExpressLogo} alt="express" />
            </figure>
           </Card>
           <Card
             as={Col} 
             md={{ span: 2 }}
             className="technology"
           >
             <figure>
               <img src={NodeJSLogo} alt="nodeJS" />
            </figure>
           </Card>
           <Card
             as={Col} 
             md={{ span: 2 }}
             className="technology"
           >
             <figure>
               <img src={GitLogo} alt="nodeJS" />
            </figure>
           </Card>
           </Container>

          </Container>
        </>
    )
}
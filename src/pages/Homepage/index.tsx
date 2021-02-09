import React from "react"
import Navigation from "../../components/Navigation"
import About from "../About"
import Portfolio from "../Portfolio"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

import "./homepage.scss"

export default function Homepage() {

    return (
    <>
    <Navigation />
        <div 
        className="banner-container"
        >
            <h1 className="banner-text" id="offset">
                Hi I'm Jur van Toledo
                <div className="inner"></div>
            </h1>
        </div>
        
        <About />
        <Portfolio />

        <footer>
            <span></span>
            <p>© 2021 build by Jur van Toledo</p>
          <div className="socials">
            <a target="_blank" rel="noreferrer" href="https://github.com/jurvantoledo">
             <FontAwesomeIcon icon={faGithub} />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jurvantoledo/">
             <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </footer>
    </>
    )
}
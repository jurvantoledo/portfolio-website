import React from "react"
import { 
    Container, 
} from "react-bootstrap"
import About from "../About"
import Portfolio from "../Portfolio"
import "./homepage.scss"

export default function Homepage() {

    return (
    <>
        <div 
        className="banner-container"
        style={{ backgroundImage: `url(https://images.pexels.com/photos/4119179/pexels-photo-4119179.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)` }}
        >
            <h1 className="banner-text">
                Hi I'm Jur van Toledo
            </h1>
        </div>
        
        <About />
        <Portfolio />

        <footer>
            <Container className="footer-container">
                <div>
                    <p>Email: <a href="mailto:jurvantoledo@live.nl">jurvantoledo@live.nl</a></p>
                </div>
            </Container>
        </footer>
    </>
    )
}
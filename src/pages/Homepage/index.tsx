import React from "react"
import { 
    Button, 
    Container, 
    Jumbotron 
} from "react-bootstrap"
import About from "../About"
import "./homepage.scss"

export default function Homepage() {

    return (
    <>
        <div 
        className="banner-container"
        style={{ backgroundImage: `url(https://images.pexels.com/photos/1036857/pexels-photo-1036857.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)` }}
        >
        </div>
        <Jumbotron>
                <h1>Jur van Toledo</h1>
        </Jumbotron>
        <Container>
        </Container>
        <About />
    </>
    )
}
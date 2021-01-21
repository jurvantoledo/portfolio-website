import React from "react"
import { 
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
            <h1>Hi I'm Jur van Toledo</h1>
        </div>
 
        <About />
    </>
    )
}
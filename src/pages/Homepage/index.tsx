import React from "react"
import Navigation from "../../components/Navigation"
import About from "../About"
import Portfolio from "../Portfolio"
import "./homepage.scss"

export default function Homepage() {

    return (
    <>
    <Navigation />
        <div 
        className="banner-container"
        style={{ backgroundImage: `url(https://wallpaperaccess.com/full/1088032.jpg)` }}
        >
            <h1 className="banner-text">
                Hi I'm Jur van Toledo
            </h1>
        </div>
        
        <About />
        <Portfolio />

        <footer>
        </footer>
    </>
    )
}
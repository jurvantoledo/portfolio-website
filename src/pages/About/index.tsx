import React from "react"
import { 
    Card, 
    Container, 
    Jumbotron,
    Col 
} from "react-bootstrap"

import "./about.scss"

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
            md={{ span: 3 }}
            >
             <h3>Motorcycles</h3>
             <figure>
              <img 
               src="https://images.pexels.com/photos/165938/pexels-photo-165938.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
               alt="motor-image" />
             </figure>
             <p>I like Motorcycles</p>
            </Card>
           </Container>
        </Container>
        </>
    )
}
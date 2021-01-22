import React from "react"
import { 
    Container, 
    Jumbotron, 
    Col
} from "react-bootstrap"

export default function Portfolio() {
    return (
    <>
      <Container 
        className="portfolio-container"
        as={Col} 
        md={{ span: 12}}
      >
        <Jumbotron className="title">
            <h2>Portfolio</h2>
        </Jumbotron>
        <Container className="prortfolio-container">
            <p>
              <strong>Projects</strong>
            </p>
        </Container>
      </Container>
    </>
    )
}
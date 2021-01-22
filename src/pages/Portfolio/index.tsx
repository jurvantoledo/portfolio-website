import React from "react"
import { Container, Jumbotron } from "react-bootstrap"

export default function Portfolio() {
    return (
    <>
        <Jumbotron className="title">
            <h2>Portfolio</h2>
        </Jumbotron>
        <Container className="prortfolio-container">
            <p>
              <strong>Projects</strong>
            </p>
        </Container>
    </>
    )
}
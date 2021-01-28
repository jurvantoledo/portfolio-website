import React from "react"
import { 
    Container, 
    Jumbotron, 
    Col,
    Card
} from "react-bootstrap"
import addStoreFoto from "./Images/add-a-store.jpg"
import borderlandsFoto from "./Images/borderlands-website.jpg"

import "./portfolio.scss"

export default function Portfolio() {
    return (
    <>
      <Container 
        className="portfolio-container"
      >
        <Jumbotron className="title">
            <h2>Portfolio</h2>
        </Jumbotron>
            <Container 
            className="portfolio-projects"
            as={Col} 
            md={{ span: 12}}
            >
                <Card 
                as={Col} 
                md={{ span: 4}}
                >
                 <figure>
                   <img src={addStoreFoto} alt="project-1" />
                 </figure>
                 <a 
                 target="_blank" 
                 rel="noreferrer" 
                 href="https://add-that-store.netlify.app/"
                 >
                    Add A Store
                </a>
                </Card>
                <Card 
                as={Col} 
                md={{ span: 4}}
                >
                 <figure>
                   <img src={borderlandsFoto} alt="project-1" />
                 </figure>
                 <a 
                 target="_blank"
                 rel="noreferrer" 
                 href="https://borderlands-weapon-collector.netlify.app/"
                 >
                    Borderlands weapon collector
                </a>
                </Card>
            </Container>
        </Container>
    </>
    )
}
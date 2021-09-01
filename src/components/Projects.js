import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Projects = props => {

        return (

            <Container>
                <Row xs={1} md={2} >
                        {props.projects.map(project => 
                            <Col className="d-flex justify-content-around">
                                <Card key={project.id} >
                                    <Card.Header className="text-center">
                                        <Link to={`/projects/${project.id}`}>{project.title}</Link>
                                    </Card.Header>
                                    <Link to={{ pathname: project.demo }} target={"{}"}>
                                        <Card.Img src={project.screenshot} alt="Demo" className="img-fluid" />
                                    </Link>
                                </Card>
                            </Col>
                            )}
                </Row>
            </Container>
        )
}

export default Projects
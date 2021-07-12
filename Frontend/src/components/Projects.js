import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Projects = props => {

        return (

            <Container>
                <Row xs={1} md={2} >
                            {props.projects.map(project => 
                            <Col className="d-flex justify-content-around">
                                <Card key={project.id} style=
                                {{ width: '20rem', height: '20rem', margin: '10px'}}
                                >
                                    <Card.Header className="text-center">
                                        <Link target={"{}"} to={{ pathname: project.git}}>{project.title}</Link>
                                    </Card.Header>
                                    <Link to={{ pathname: project.demo }} target={"{}"}>
                                        <Card.Img src={project.screenshot} alt="Demo" class="img-fluid" />
                                    </Link>
                                </Card>
                    </Col>
                            )}
                    {/* <CardColumns> */}
                    {/* </CardColumns> */}
                </Row>
            </Container>
        )
}

export default Projects
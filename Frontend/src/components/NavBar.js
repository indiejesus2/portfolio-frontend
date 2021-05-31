import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'

class NavBar extends Component {

    render() {
        return (
            <div className="container">

            <Nav className="d-flex justify-content-between">
                <Nav.Item>
                    <Nav.Link to={`/welcome`}>Welcome</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link to={`/projects`}>Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link to={`/welcome`}>Resume</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link to={`/welcome`}>Contact</Nav.Link>
                </Nav.Item>
            </Nav>
            </div>
        )
    }
}


export default NavBar
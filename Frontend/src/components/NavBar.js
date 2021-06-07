import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';

class NavBar extends Component {

    render() {
        return (
            <div className="container">

            <Nav className="d-flex justify-content-between">
                <Nav.Item>
                    <Nav.Link href={`/welcome`}>Welcome</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href={`/projects`}>Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href={`/welcome`}>Resume</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href={`/projects`}>Contact</Nav.Link>
                </Nav.Item>
            </Nav>
            </div>
        )
    }
}


export default NavBar
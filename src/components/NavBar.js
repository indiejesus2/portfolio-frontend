import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class NavBar extends Component {

    render() {
        return (
            <div>
                <Link to={`/welcome`}>Welcome  </Link>
                <Link to={`/Projects`}>Projects</Link>
            </div>
        )
    }
}


export default NavBar
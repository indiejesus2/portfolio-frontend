import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Projects extends Component {

    render() {
        return (
            <div class="container">
                <Link target={"{}"} to={{ pathname: "https://www.github.com/indiejesus2/counting-cookies"}}>Counting Cookies</Link>
                <Link to={{ pathname: "https://drive.google.com/file/d/1PYk54rWBVbEonz_Nslf5JXcbIvTyGYZr/view" }} target={"{}"}>
                    <img src='images/Frisbee_Golf_Course.png' alt="Demo" className="img-fluid" />
                </Link>
            </div>
        )
    }
}

export default Projects
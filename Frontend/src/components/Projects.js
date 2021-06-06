import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Projects = props => {

        debugger
        return (
            <div className="container">
                <ul>
                    {props.projects.map(project => 
                        <li key={project.id}>
                            <Link target={"{}"} to={{ pathname: "https://www.github.com/indiejesus2/counting-cookies"}}>{project.title}</Link>
                            <Link to={{ pathname: "https://drive.google.com/file/d/1PYk54rWBVbEonz_Nslf5JXcbIvTyGYZr/view" }} target={"{}"}>
                                <img src={project.screenshot} alt="Demo" className="img-fluid" />
                            </Link>
                        </li>    
                    )}
                </ul>
            </div>
        )
}

export default Projects
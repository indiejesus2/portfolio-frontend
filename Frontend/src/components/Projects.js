import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Projects = props => {

        debugger
        return (
            <div className="container">
                <ul>
                    {props.projects.map(project => 
                        <li key={project.id}>
                            <Link target={"{}"} to={{ pathname: project.git}}>{project.title}</Link>
                            <Link to={{ pathname: project.demo }} target={"{}"}>
                                <img src={project.screenshot} alt="Demo" className="img-fluid" />
                            </Link>
                        </li>    
                    )}
                </ul>
            </div>
        )
}

export default Projects
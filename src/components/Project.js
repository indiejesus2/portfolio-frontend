import React, { Component } from 'react';

class Project extends Component {
    render() {
        let project = this.props.projects.filter(project => project.id === Number(this.props.match.params.id))[0]
        // project = project[0]
        let image = project.screenshot.toString()
        debugger
        return (
            <div key={project.id} className="project">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <img src={(`/${project.screenshot}`)} alt="" />
            </div>
        )
    }
}

export default Project
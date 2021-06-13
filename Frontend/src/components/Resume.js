import React, { Component } from 'react'

class Resume extends Component {

    render() {
        return (
            <div className="container">
                <h1>Resume</h1>
                <h3>Skills</h3>
                <img src="images/javascript.png" alt="Javascript" />
                <img src="images/ruby.png" alt="Ruby" />
                <img src="images/react.png" alt="React" />
                <img src="images/redux.png" alt="Redux" />
                <img src="images/bootstrap.png" alt="Bootstrap" />
                <h3>Education</h3>
                <ul>
                    <li>Flatiron School - Software Development Program</li>
                    <small>Full Stack Web Development, Ruby on Rails and JavaScript program</small>
                    <li>Rutgers University - Masters in Political Science</li>
                    <small>Constitutional Law - American Foreign Policy - Policymaking In America</small>
                    <li>Monmouth University - Communications </li>
                    <small>Feature Writing - Ethics in Journalism - Editorial Writing</small>
                </ul>
                <h3>Experience</h3>
                    <h5>Jackson Public School District - Building Substitute Teacher</h5>
                <ul>
                    <li>Taught a second grade classroom by devising engaging lesson plans and preparing students for the third grade.</li>
                    <li>Monitored large group activities that promoted the well-being and safety of students.</li>
                    <li>Assisted teachers and school administrators with maintaining a positive learning environment.</li>
                </ul>
                    <h5>Ruby Tuesdays - GSC/Bartender</h5>
                <ul>
                    <li>Managed nightly operations, adhering to food and safety regulations that consistently met inspection standards.</li>
                    <li>Developed positive relationships with local patrons who valued top service in a fast-paced environment.</li>
                </ul>
            </div>
        )
    }
}

export default Resume
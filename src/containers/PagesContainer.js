import React, { Component } from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Welcome from '../components/Welcome'
import Projects from '../components/Projects'
import Resume from '../components/Resume'
import Contact from '../components/Contact'

class PagesContainer extends Component {

    render() {
        document.title = "Daniel Ste. Marie"
        return (
            <div>
                <Switch>
                    <Redirect exact from="/" to="/Welcome" />
                    <Route path ='/welcome'>
                        <Welcome />
                    </Route>
                    <Route direct path ='/resume'>
                        <Resume />
                    </Route>
                    <Route direct path ='/projects' render={(routerProps) => <Projects {...routerProps} projects={this.props.projects} />} />
                    <Route direct path='/contact'>
                        <Contact />
                    </Route>
                </Switch>
            </div>
        )
    }
}

export default PagesContainer
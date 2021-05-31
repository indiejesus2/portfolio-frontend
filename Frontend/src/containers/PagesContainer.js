import React, { Component } from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Welcome from '../components/Welcome'
import Projects from '../components/Projects'

class PagesContainer extends Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route direct path ='/welcome'>
                        <Welcome />
                    </Route>
                    <Route direct path ='/projects'>
                        <Projects />
                    </Route>
                    <Route direct path='/'><Redirect to="/Welcome" /></Route>
                </Switch>
            </div>
        )
    }
}

export default PagesContainer
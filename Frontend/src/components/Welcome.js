import { Component } from 'react'

class Welcome extends Component {

    render() {
        return (
            <div className="container">
                <div className="py-5">
                <h3 className="text-muted">Hello</h3>
                <h1 className="display-1">I'm Dan Ste. Marie. </h1>
                <h4>Welcome to my Homepage!</h4>
                <p className="lead">I'm a Software Engineer located along the Jersey Shore. I like building things, breaking them and putting them back together. I also enjoy cooking, eating out and playing my guitar.</p>
                <img src='images/me (2).png' alt="Demo" className="img-fluid rounded " />

                </div>
            </div>
        )
    }
}

export default Welcome
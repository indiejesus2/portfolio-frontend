import { Component } from 'react'

class Welcome extends Component {

    render() {
        return (
            <div className="container">
                <div className="py-5">
                <img src='images/me (2).png' alt="Dan Ste. Marie" className="img-fluid rounded " />
                <h3 className="text-muted">Hello!</h3>
                <h2 className="display-1">I'm Dan Ste. Marie. </h2>
                <h4>Welcome to my Homepage!</h4>
                <p className="lead">
                I'm a Software Engineer located along the Jersey Shore. I like building things, breaking them and putting them back together. I also enjoy cooking, going to the beach and playing my guitar.</p>

                </div>
            </div>
        )
    }
}

export default Welcome
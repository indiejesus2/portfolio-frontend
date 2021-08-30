import { Component } from 'react'

class Contact extends Component {

    render() {
        return (
            <div className="container">
                <h1>CONTACT ME</h1>
                <p>I am available for hire and open to any ideas of cooperation.</p>
                <div className="contact">
                    <h1>Links</h1>
                    <table>
                        <tr>
                            {/* <td>
                                Email:   
                            </td> */}
                            <td><a href="mailto:dste.mariejr@gmail.com">Email</a></td>
                        </tr>
                        <tr>
                            {/* <td>
                                LinkedIn:   
                            </td> */}
                            <td><a href="https://www.linkedin.com/in/daniel-ste-marie-jr-0b419b61/"> LinkedIn</a></td>
                        </tr>
                        <tr>
                            {/* <td>
                                Github:   
                            </td> */}
                            <td><a href="https://www.github.com/indiejesus2">Github</a></td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}

export default Contact
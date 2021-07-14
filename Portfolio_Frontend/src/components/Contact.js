import { Component } from 'react'

class Contact extends Component {

    render() {
        return (
            <div className="container">
                <h1>CONTACT ME</h1>
                <p>I am available for hire and open to any ideas of cooperation.</p>
                <div className="contact">
                    <table>
                        <tr>
                            <td>
                                Email: 
                            </td>
                            <td><a href="mailto:dste.mariejr@gmail.com"></a></td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}

export default Contact
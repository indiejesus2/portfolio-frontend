import React,{ Component } from 'react'
import PagesContainer from './containers/PagesContainer';
import NavBar from './components/NavBar'
import Jumbotron from 'react-bootstrap/Jumbotron'
// import 'bootstrap/dist/css/boostrap.min.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
            <div className="jumbotron">
          {/* <div className="my-auto">
          <div className="py-auto"> */}

              <h1 className="display-3 justify-content">Daniel Ste. Marie</h1>
              <NavBar />
            {/* </div>
            </div> */}
          </div>
          </div>
          <PagesContainer />
      </div>
    );
  }
  }

export default App;

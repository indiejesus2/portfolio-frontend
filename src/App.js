import React,{ Component } from 'react'
import PagesContainer from './containers/PagesContainer';
import NavBar from './components/NavBar'
import Jumbotron from 'react-bootstrap/Jumbotron'
// import 'bootstrap/dist/css/boostrap.min.css'

class App extends Component {
  render() {
    return (
      <div className="App">
          <div>
            <Jumbotron>
              <h1>Daniel Ste. Marie</h1>
              <NavBar />
            </Jumbotron>
          </div>
          <PagesContainer />
      </div>
    );
  }
  }

export default App;

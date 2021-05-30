import React,{ Component } from 'react'
import PagesContainer from './containers/PagesContainer';
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar />
          <PagesContainer />
      </div>
    );
  }
  }

export default App;

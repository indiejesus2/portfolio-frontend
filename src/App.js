import React,{ Component } from 'react'
import Welcome from './components/Welcome'
import Projects from './components/Projects';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome />
        <Projects />
      </div>
    );
  }
  }

export default App;

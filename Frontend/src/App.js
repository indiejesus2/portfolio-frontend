import React from 'react'
import {useState, useEffect} from 'react'
import PagesContainer from './containers/PagesContainer';
import NavBar from './components/NavBar'
import Jumbotron from 'react-bootstrap/Jumbotron'
// import 'bootstrap/dist/css/boostrap.min.css'

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
      fetch('http://localhost:3000/projects')
      .then(resp => resp.json())
      .then(projects => {
          setProjects(projects)
      })
  }, [])

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
          <PagesContainer projects={projects}/>
      </div>
    );
  }

export default App;

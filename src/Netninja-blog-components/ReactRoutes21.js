// older versions of react import React is present
// import './App.css';

//importing Navbar5
import Navbar5 from './Navbar5';

//importing Home5
import Home5 from "./Home5";

// importing react routers
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {

  /*
  App.js is our root component all other components are its
  sub-components that sit below it

  to create dynamic componets we create Navbar.js
  */ 
  const title = "App Component";


  return (
    <Router>
    <div className="App">
      <Navbar5/>
      <div className="content">
        <Switch>
            <Router path="/">
              <Home5 />
            </Router>
        </Switch>   
      </div>
    </div>
    </Router>
  );
}

export default App;

// older versions of react import React is present
// import './App.css';



// importing react routers
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound32 from './NotFound32';
import Navbar from "./Navbar";
import Main from "./Main";
import Admin from './Admin';

function App() {

  /*
  App.js is our root component all other components are its
  sub-components that sit below it

  to create dynamic componets we create Navbar.js
  */ 
  //const title = "App Component";


  return (
    <Router>
    <div className="App">

      <div className="content">
        <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/navbar">
              <Navbar />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="*">
              <NotFound32 />
            </Route>
        </Switch>   
      </div>
    </div>
    </Router>
  );
}

export default App;

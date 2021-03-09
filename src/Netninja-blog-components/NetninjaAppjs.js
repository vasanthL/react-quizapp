// older versions of react import React is present
// import './App.css';

//importing Navbar5
import Navbar5 from './Navbar5';

//importing Home5
import Home5 from "./Home5";

// importing react routers
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Create22 from './Create22';
import BlogDetails25 from './BlogDetails25';
import NotFound32 from './NotFound32';

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
      <Navbar5/>
      <div className="content">
        <Switch>
            <Route exact path="/">
              <Home5 />
            </Route>
            <Route path="/create">
              <Create22 />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails25 />
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

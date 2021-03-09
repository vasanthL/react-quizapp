// older versions of react import React is present
import './App.css';

//importing Navbar5
import Navbar5 from './Navbar5';

//importing Home5
import Home5 from "./Home5";

function App() {

    /*
    App.js is our root component all other components are its
    sub-components that sit below it
  
    to create dynamic componets we create Navbar.js
    */
    const title = "App Component";


    return (
        <div className="App">
            <Navbar5 />
            <div className="content">
                <h1>{title}</h1>
                <Home5 />
            </div>
        </div>
    );
}

export default App;

import { Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';
import History from './History';
import Ranking from './Ranking';
import Quiz from "./Quiz"

const Navbar = () => {
    const [name,setName] = useState("vasanth");

    return (
        <div className="nav-div">
         <nav className="navbar">
             <h1>Cloud Preparation Mocks</h1>
            <div className="links">
                <Link>Hi, {name}</Link>
                <Link to="/">logout [></Link>
            </div>
         </nav>
            <nav className="dashbar">
                
                <div className="dash-links">
                    <Link>Welcome</Link>
                    <Link to='/navbar/'>Home</Link>
                    <Link to='/navbar/history'>History</Link>
                    <Link to='/navbar/ranking'>Ranking</Link>
                    <input type = "text" placeholder="Enter Tag"/>
                    <button>Search</button>
                </div>
            </nav>    

            <Switch>
                <Route exact path="/navbar/">
                    <Home/>
                </Route>
                <Route path="/navbar/history">
                    <History />
                </Route>
                <Route path="/navbar/Ranking">
                    <Ranking />
                </Route>
                <Route path="/navbar/Quiz/:id">
                    <Quiz />
                </Route>
            </Switch>
        </div>
      );
}
 
export default Navbar;
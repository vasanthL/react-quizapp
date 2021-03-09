import { Link, NavLink, Route, Switch } from "react-router-dom";
import AdminAnalysis from "./AdminAnalysis";
import AdminFeedback from "./AdminFeedback";
import SetQuiz from "./SetQuiz";


const AdminNav = () => {
    return ( 
        <div className="admin-navigator">
        <nav className="dashbar">

            <div className="dash-links">
                <Link className="welcome-admin">Welcome Admin</Link>
                <Link to='/admin/'>home</Link>
                <NavLink to='/admin/adminNav/admin-feedback'>Feedbacks</NavLink>
                <Link to='/admin/adminNav/admin-analysis'>Analysis</Link>
            </div>
            <div className="logout-div">
                    <Link to='/'>logout</Link>
            </div>
        </nav> 
        <div className="admin-contains">
            <Switch>
                <Route exact path="/admin/">
                    <SetQuiz />
                </Route>
                <Route path="/admin/adminNav/admin-feedback">
                    <AdminFeedback />
                </Route>
                <Route path="/admin/adminNav/admin-analysis">
                    < AdminAnalysis />
                </Route>

            </Switch>
            </div>
        </div>
     );
}
 
export default AdminNav;
import { Link } from 'react-router-dom';

// login page

const Main = () => {
    return (
        <div className="main">
            <Link to="/navbar" >Logged in and  to dashboard</Link><br/>
            <Link to="/admin" >Logged in to Admin dashboard</Link>

            
        </div>
      );
}
 
export default Main;
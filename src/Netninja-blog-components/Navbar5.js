/*
sfc is the shortcut to create statles function compo
using emmet

const  = () => {
    return (  );
}

export default ;


*/

import { Link } from 'react-router-dom';

//boiler plate component using sfc
const  Navbar= () => {
    return ( 
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                
               {/* <a href="/">Home</a>
                {/* add inline CSS styles to components }
                <a href="/create" /*style={{
                    color:"white",
                    backgroundColor:"#f1356d",
                    borderRadius:"8px"

                }} >New Blog</a> */}

                {/* instead of <a> <Link>  is used so request is handled by react instead of server */}
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;
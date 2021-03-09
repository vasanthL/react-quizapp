/*
sfc is the shortcut to create statles function compo
using emmet

const  = () => {
    return (  );
}

export default ;


*/

//boiler plate component using sfc
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">

                <a href="/">Home</a>
                {/* add inline CSS styles to components */}
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px"

                }}>New Blog</a>
            </div>
        </nav>
    );
}

export default Navbar;
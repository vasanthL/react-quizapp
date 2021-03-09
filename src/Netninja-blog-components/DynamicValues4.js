// older versions of react import React is present
import './App.css';

function App() {

    /*
    Attribute values can be int str or array and cannot be 
    objects or json and are indicated by
    {title} {link}
    */
    const title = "Welcome to my App Page";
    const link = "https://www.google.com";
    const num = 24.7;
    const arr = [1, 2, 3.0, 4]

    return (
        <div className="App">
            <div className="content">
                <h1>{title}</h1>
                <p>{num}</p>
                <p>{arr}</p>
                <p>{Math.random() * 20}</p>
                <a href={link}> Google site</a>
            </div>
        </div>
    );
}

export default App;

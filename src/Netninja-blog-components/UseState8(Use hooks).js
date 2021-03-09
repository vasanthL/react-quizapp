//sfc
import { useState } from "react";

const Home5 = () => {

    //using hooks to make variables reactive
    const [name, setName] = useState('vasi')
    const [age, setAge] = useState(24)

    function States() {
        // hooks state functions
        setName('vasanth');
        setAge(Math.floor(Math.random() * 22));
    }

    return (
        <div className="Home">
            <h2>HomePage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={States}>Click here</button>
        </div>
    );
}

export default Home5;
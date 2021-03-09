//sfc
import userEvent from "@testing-library/user-event";
import { useState, useEffect } from "react";
import BlogList from "./BlogList11";



const Home5 = () => {

    //using hooks to make variables reactive
    const [blogs, setBlogs] = useState(null);

    //set name
    const [Name, setName] = useState('mario')



    /* Works on every rendering takes place and also changes only for dependencies */
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(response => (response.json()))
            .then(data => setBlogs(data))
    }, []);

    return (
        <div className="Home">
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}

        </div>
    );
}

export default Home5;
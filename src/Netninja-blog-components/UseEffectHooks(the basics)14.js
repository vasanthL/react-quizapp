//sfc
import { useState, useEffect } from "react";
import BlogList from "./BlogList11";

const Home5 = () => {

    //using hooks to make variables reactive
    const [blogs, setBlogs] = useState([
        { title: 'My new Website', body: "lorem ipsum...", author: "mario", id: 1 },
        { title: 'Welcome party!', body: "lorem ipsum...", author: "miti", id: 2 },
        { title: 'Web dev top Tips', body: "lorem ipsum...", author: "mario", id: 3 }
    ]);

    function handleDelete(id) {
        const newblogs = blogs.filter((blog) => blog.id !== id)
        setBlogs(newblogs)
    }

    /* Works on every rendering takes place */
    useEffect(() => {
        console.log("use effect ran");
        console.log(blogs)
    });

    return (
        <div className="Home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
            {/*<BlogList blogs={blogs.filter((blog) => blog.author ==="mario")} title="Mario Blogs!" handleDelete={handleDelete}/>*/}
        </div>
    );
}

export default Home5;
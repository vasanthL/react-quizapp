//sfc
import { useState } from "react";
import BlogList from "./BlogList11";

const Home5 = () => {

    //using hooks to make variables reactive
    const [blogs, setBlogs] = useState([
        { title: 'My new Website', body: "lorem ipsum...", author: "mario", id: 1 },
        { title: 'Welcome party!', body: "lorem ipsum...", author: "miti", id: 2 },
        { title: 'Web dev top Tips', body: "lorem ipsum...", author: "mario", id: 3 }
    ]);

    return (
        <div className="Home">
            <BlogList blogs={blogs} title="All Blogs!" />
            <BlogList blogs={blogs.filter((blog) => blog.author === "mario")} title="Mario Blogs!" />
        </div>
    );
}

export default Home5;
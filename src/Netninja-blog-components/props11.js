//sfc
import { useState } from "react";
import BlogList from "./BlogList11";

const Home5 = () => {

    //using hooks to make variables reactive
    const [blogs, setBlogs] = useState([
        { title: 'My new Website', body: "lorem ipsum...", author: "rio", id: 1 },
        { title: 'Welcome party!', body: "lorem ipsum...", author: "mai", id: 2 },
        { title: 'Web dev top Tips', body: "lorem ipsum...", author: "kete", id: 3 }
    ]);

    return (
        <div className="Home">
            <BlogList blogs={blogs} title="My Blogs!" />
        </div>
    );
}

export default Home5;

/*

const BlogList = ( // props { blogs, title }) => {

    // const blogs = props.blogs;
    // const title = props.title; 
    return (
        <div className="blogList" key >
            <h2>{title}</h2>
            {
                blogs.map((blog) =>
                (
                    <div className="blog-preview" key >
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default BlogList;
*/
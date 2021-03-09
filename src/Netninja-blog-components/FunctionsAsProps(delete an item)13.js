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

    function handleDelete(id) {
        const newblogs = blogs.filter((blog) => blog.id !== id)
        setBlogs(newblogs)
    }


    return (
        <div className="Home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
            {/*<BlogList blogs={blogs.filter((blog) => blog.author ==="mario")} title="Mario Blogs!" handleDelete={handleDelete}/>*/}
        </div>
    );
}

export default Home5;


/*
const BlogList = (//props { blogs, title, handleDelete }) => {

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
                        <button className="delete-button" onClick={() => handleDelete(blog.id)}>Delete Blog</button>
                    </div>
                ))
            }
        </div>
    );
}

export default BlogList;

*/
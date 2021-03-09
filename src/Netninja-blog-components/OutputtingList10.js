//sfc
import { useState } from "react";

const Home5 = () => {

    //using hooks to make variables reactive
    const [blogs, setBlogs] = useState([
        { title: 'My new Website', body: "lorem ipsum...", author: "rio", id: 1 },
        { title: 'Welcome party!', body: "lorem ipsum...", author: "mai", id: 2 },
        { title: 'Web dev top Tips', body: "lorem ipsum...", author: "kete", id: 3 }
    ]);

    return (
        <div className="Home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}

export default Home5;
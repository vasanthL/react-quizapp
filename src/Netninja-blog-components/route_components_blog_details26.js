import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    console.log(id)
    const url = `http://localhost:8000/blogs/${id}`;
    console.log(url)
    const { data: blog, isPending, error } = useFetch(url);

    return (
        <div className="blog-details">

            {isPending && <div> loading... </div>}
            {error && <div> {error} </div>}
            { blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                </article>)}
        </div>
    );
}

export default BlogDetails;
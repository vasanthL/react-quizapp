import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
//import { useHistory } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams();
    //console.log(id)
    const url = `http://localhost:8000/blogs/${id}`;
    //console.log(url)
    const { data:blog, isPending, error } = useFetch(url);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id,{
            method:"DELETE"
        }).then(() => history.push("/"))
    }

    return (
        <div className="blog-details">
            
                {isPending && <div> loading... </div>}
                {error && <div> { error } </div>}
                { blog && (
                <article>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <div>{blog.body}</div>
                <button className="delete-button" onClick = {handleClick}>delete blog</button>
                </article>)}
        </div>
    );
}

export default BlogDetails;
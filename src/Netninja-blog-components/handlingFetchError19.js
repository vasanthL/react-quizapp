//sfc
import userEvent from "@testing-library/user-event";
import { useState, useEffect } from "react";
import BlogList from "./BlogList11";



const Home5 = () => {

    //using hooks to make variables reactive
    const[blogs,setBlogs] = useState(null);

    //set name
    const[Name,setName] = useState('mario')

    const[isPending,setisPending] = useState(true)
    const[error,setError] = useState(null)

    /* Works on every rendering takes place and also changes only for dependencies */
    useEffect(()=>{
        setTimeout(() => {
            fetch('http://localhost:8000/blogss')
                .then(response => {
                    

                    if(!response.ok){
                        throw Error('unable to get the data!');
                    }     
                    setisPending(false)
                    setError(null)
                    return (response.json())           
                })
                .then(data => setBlogs(data))
                .catch((err) => {
                    console.log(err.message);
                    setisPending(false)
                    setError(err.message);
                })
                
            
        }, 1000);
        
    },[]);
     
    return ( 
        <div className="Home">
            { isPending && <div>Loading...</div> }
            { error && <div>{error}</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
            
        </div>
     );
}

export default Home5;
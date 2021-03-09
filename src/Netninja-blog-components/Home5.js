//sfc

import BlogList from "./BlogList11";
import useFetch from "./useFetch";



const Home5 = () => {

    //set name
    //const[Name,setName] = useState('mario')

    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    /* Works on every rendering takes place and also changes only for dependencies */
    
     
    return ( 
        <div className="Home">
            { isPending && <div>Loading...</div> }
            { error && <div>{error}</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
            
        </div>
     );
}

export default Home5;

// customs hooks must have names starting with 'use' (excercise 20)
// 'http://localhost:8000/blogss'

//in order get rid of component change state error we use AbortController
import { useState, useEffect } from "react";

const useFetch = (url) => {

    //using hooks to make variables reactive
    const [data, setData] = useState(null);    
    const [isPending, setisPending] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
        const abortcont = new AbortController();

        setTimeout(() => {
            fetch(url,{signal: abortcont.signal})
                .then(response => {


                    if (!response.ok) {
                        throw new Error('unable to get the data!');
                    }
                    setisPending(false)
                    setError(null)
                    return (response.json())
                })
                .then(data => setData(data))
                .catch((err) => {

                    if(err.name === "AbortError")
                    {
                      console.log("Fetch aborted!");
                    }
                    else{
                    console.log(err.message);
                    setisPending(false)
                    setError(err.message);
                    }
                })

                
        }, 500);
        return (() => abortcont.abort())

    }, [url]);
    return ( {data, isPending, error} );
}
 
export default useFetch;
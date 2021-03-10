import { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const Userfeedback = () => {

    const[quiz,setQuiz] = useState('');
    const [rating,setrating] = useState('');
    const[message,setmessage] = useState('');
    const[fbalert,setfbalert] =useState(false);
    
    const sendfeedback = () => {
        console.log("button works");

        const url = "https://credify.tk/sendfeedback";

        const feedbacksegment = {
            quiz:8,
            rating:rating,
            msg:message
        }

        console.log(feedbacksegment);

        axios.post(url, feedbacksegment,{ headers: {
            "Authorization": 'TOKEN ccfab9f5a7d7964ee586e814d006bcc01401b36346e117c72b41292f8d98c91c'
        }})
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (err) {
                console.log("error message:", err.message);
            })
            setrating("");
            setmessage("");
            setfbalert(true);
            setTimeout(() => {
                setfbalert(false)
            }, 2000);

    }


    return ( 
        <div className="user-feedback" 
            style={{ 
                padding: "10px",
                width: "660px",
                margin: "16px auto",
                boxShadow:"1px 3px 5px rgba(0, 0, 0, 0.3)"
             }}
        >
            <h2 className="feedback"
                style={{
                    backgroundColor:"#ffde7a",
                    padding:"0 16px",
                    marginBottom:"10px"
                }}

            >Add a feedback on the test</h2>
            <div className="rating">
                <p>how was the test </p>
                <select className="rating"
                required
                onChange = {(e) => setrating(e.target.value)}
                value={rating}
                    style={{
                        width: "90%",
                        borderRadius: "6px",
                        padding: "6px"
                    }}
                >
                    <option value="very good">very good</option>
                    <option value="good">good</option>
                    <option value="not good">not good</option>
                    <option value="bad">bad</option>
                </select>
            </div>
            <div className="message">
                <p>provide feedback </p>
                <input type="text" className="message" 
                    onChange={(e) => setmessage(e.target.value)}
                    value={message}
                    style={{
                        width:"89%",
                        borderRadius:"6px",
                        padding:"6px",
                        outline:"none",
                        border:"1px solid grey",
                        marginBottom:"4px"
                    }}
                />
            </div>
            
            <button className="feedback-button"
            onClick= {()=> sendfeedback()}
            style ={{
                backgroundColor:"#ffde7a",
                padding: "8px",
                color:"black",
                fontWeight:"600",
                outline:"none",
                border:0,
                borderRadius:"6px",
                marginBottom:"4px"
            }}

            >send Feedback</button>
            {fbalert && <div>feedback sent</div>
            }
        </div>
     );
}
 
export default Userfeedback;
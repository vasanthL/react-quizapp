import axios from "axios";


const Feedbacklist = (/*props*/ { feedbacks, fbdelete }) => {

    // const blogs = props.blogs;
    // const title = props.title; 

   

    return (
        <div className="FeedbackList" key
        style = {{
            margin: " 6px auto"
        }}
        >
            <h2>Feedbacks from Users</h2>
            <table>
                <tr>
                    <th>Username</th>
                    <th>rating</th>
                    <th>usermessage</th>
                    <th>delete feedback</th>
                </tr>
                {
                feedbacks.map((feedback) =>
                (
                    <tr className="feedback-preview" key={feedback.id}>
                            <td>{feedback.user.name}</td>
                            <td>{feedback.rating}</td>
                            <td>{feedback.msg}</td>
                            <td><button onClick ={() => fbdelete(feedback.id)}
                            >delete</button></td>

                    </tr>
                ))
            }
            </table>
            
        </div>
    );
}

export default Feedbacklist;
import { useRouteMatch } from 'react-router-dom';
const AdminFeedback = () => {
    const { url, path } = useRouteMatch();

    return ( 
        <div className="admin-feedback">
            <h2>show the users feedbacks</h2>
            <p>{url}</p>
            <p>{path}</p>
        </div>
     );
}
 
export default AdminFeedback;
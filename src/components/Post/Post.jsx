import { Link, useNavigate } from 'react-router-dom';
import './Post.css'
const Post = ({ post }) => {

    const { id, title } = post;
    const navigate=useNavigate()
    const postStyle = {
        border: '2px solid goldenrod',
        padding: '10px',
        borderRadius: '20px',
        paddingBottom: '20px'
    }
    const handelShowDetails = () => { 
        navigate(`/post/${id}`)
    }
    return (
        <div style={postStyle}>
            <h3>Post of id : {id}</h3>
            <p>Post Title : {title}</p>
            <Link to={`/post/${id}`}>
                <button className='postButtons'>Show Details</button>
            </Link>
            <button onClick={handelShowDetails} className='postButton'>Click to show details</button>
        </div>
    );
};

export default Post;
import { Link } from 'react-router-dom';
import './Post.css'
const Post = ({ post }) => {

    const { id, title } = post;
    const postStyle = {
        border: '2px solid goldenrod',
        padding: '10px',
        borderRadius: '20px',
        paddingBottom: '20px'
    }
    return (
        <div style={postStyle}>
            <h3>Post of id : {id}</h3>
            <p>Post Title : {title}</p>
            <Link to={`/post/${id}`}>
                <button className='postButtons'>Show Details</button>
            </Link>
        </div>
    );
};

export default Post;
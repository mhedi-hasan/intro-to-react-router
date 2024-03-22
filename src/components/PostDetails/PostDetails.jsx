import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const post =useLoaderData();
    const {id,title,body} = post;
    const postDetailStyle ={
        border:'2px solid green',
        borderRadius:'20px',
        paddingBottom:'20px',
        marginTop: '40px',
        padding: '10px'
    }
    return (
        <div style={postDetailStyle}>
            <h2>This is post details {id}</h2>
            <p>Title : {title}</p>
            <p>Body : {body}</p>
        </div>
    );
};

export default PostDetails;
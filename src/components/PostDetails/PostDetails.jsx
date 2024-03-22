import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
    const post =useLoaderData();
    const navigate=useNavigate();
    const {id,title,body} = post;
    const postDetailStyle ={
        border:'2px solid green',
        borderRadius:'20px',
        paddingBottom:'20px',
        marginTop: '40px',
        padding: '10px'
    }
    const postButtonStyle ={
        backgroundColor:'#33ff44',
        border:'1px solid black'
    }
    const handelGoBack=()=>{
        navigate(-1)
    }
    return (
        <div style={postDetailStyle}>
            <h2>This is post details {id}</h2>
            <p>Title : {title}</p>
            <p>Body : {body}</p>
            <button style={postButtonStyle} onClick={handelGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;
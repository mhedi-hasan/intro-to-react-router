import { Link, useNavigate } from "react-router-dom";
import './User.css'

// import './User.css'
const User = ({user}) => {
    const {id,name, phone, username} =user;
    const navigate=useNavigate();
    const userStyle ={
        border:'2px solid goldenrod',
        padding: '10px',
        borderRadius:'20px',
        paddingBottom:'20px'
    }
    const handelShowDetails2 =()=>{
        navigate(`/user/${id}`);
    }
    return (
        <div style={userStyle}>
            {/* <h3>{id}</h3> */}
            <h2>{name}</h2>
            <h3>{phone}</h3>
            {/* <h3>{username}</h3> */}
            {/* <Link to={`/user/${id}`}>Show Details</Link> */}
            <Link to={`/user/${id}`}>
                <button className="userButton">Show Details</button>
            </Link>
            <button onClick={handelShowDetails2} className="userButtons">Click to show details</button>
        </div>
    );
};

export default User;
import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
    const user=useLoaderData();
    const navigate=useNavigate()
    const {id,name, phone, username,email,website,company,address}=user;
    const userDetailStyle ={
        border:'2px solid green',
        borderRadius:'20px',
        paddingBottom:'20px',
        marginTop: '40px'
    }
    const userButtonStyle ={
        backgroundColor:'#88ff44',
        border:'1px solid black'
    }
    const handelClickGo=()=>{
        navigate(-1);
    }
    return (
        <div style={userDetailStyle}>
            <h2>User Id : {id}</h2>
            <h2>User Name : {name}</h2>
            <h3>User Email : {email}</h3>
            <h3>User userName : {username}</h3>
            <h3>User Website : {website}</h3>
            <h3>User Company : {company.name}</h3>
            <h3>User (city-name) : {address.city}</h3>
            <h3>User Phone : {phone}</h3>
            <button style={userButtonStyle} onClick={handelClickGo}>Go Back</button>
        </div>
    );
};

export default UserDetails;
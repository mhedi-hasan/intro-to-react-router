// import './User.css'
const User = ({user}) => {
    const {id,name, phone, username} =user;
    const userStyle ={
        border:'2px solid green',
        padding: '10px',
        borderRadius:'20px'
    }
    return (
        <div style={userStyle}>
            {/* <h3>{id}</h3> */}
            <h2>{name}</h2>
            <h3>{phone}</h3>
            <h3>{username}</h3>
        </div>
    );
};

export default User;
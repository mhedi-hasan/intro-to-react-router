
const User = ({user}) => {
    const {id,name, phone, username} =user;
    return (
        <div>
            <h3>{id}</h3>
            <h2>{name}</h2>
            <h3>{phone}</h3>
            <h3>{username}</h3>
        </div>
    );
};

export default User;
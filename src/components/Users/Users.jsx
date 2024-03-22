import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'

const Users = () => {

    const users= useLoaderData();
    console.log(users);
    return (
        <div>
            <h2>Our Users :{users.length}</h2>
            <h4>Hlw man whats app</h4>
            <div className="userStyle">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;
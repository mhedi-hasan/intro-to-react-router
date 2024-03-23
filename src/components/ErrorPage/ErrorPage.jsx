import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error=useRouteError();
    console.log(error);
    const errorButtonStyle ={
        backgroundColor:'#33ff44',
        border:'1px solid black'
    }
    return (
        <div>
            <h3>Oops!!!</h3>
            <p>{error.statusText || error.message}</p>
            {
                error.status || 404 && <div>
                    <h3>Page not found</h3>
                    <p>Go back where you from</p>
                    <Link to={'/'}>
                    <button style={errorButtonStyle}>Home</button>
                    </Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;
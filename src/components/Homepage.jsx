import React from "react";
import {useNavigate} from "react-router-dom";
function Homepage(){
    const navigate=useNavigate();
    async function logout(){
        localStorage.removeItem('token');
        navigate('/login');
    }
    return(
        <div className="container">
            <h1>welcome to the homepage.</h1>
            <button onClick={logout}>Logout</button>
        </div>
    )
}
export default Homepage;
import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
function Login(){
    const navigate=useNavigate();
    const[email,setEmail]=useState("");
    const[pass,setPass]=useState("");
    const[error,setError]=useState("");
    async function userLogin(e){
        e.preventDefault();
        try{
            const result=await axios.post('https://atg-backend-49sl.onrender.com/login',{email,pass});
            setError(result.data.message);
            if(result.data.message==="login successful"){
                navigate('#/homepage');
                localStorage.setItem("token",result.data.token);
            }
        }catch(err){
            setError('login failed');
            console.error(err.message);
        }
    }
    return(
        <div className="container">
            <form onSubmit={userLogin}>
                <input type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                <input type="password" placeholder="Enter Password" value={pass} onChange={(e)=>setPass(e.target.value)} required />
                <button type="submit">Login</button>
                <div className="buttonclass">
                    <button type="button" onClick={()=>navigate('#/')}>New user? Register here...</button>
                    <button type="button" onClick={()=>navigate('#/forgotpass')}>Forgot password</button>
                </div>
            </form>
            {error && <p className="message">{error}</p>}
        </div>
    )
}
export default Login;
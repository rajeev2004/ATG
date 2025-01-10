import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
function Forgotpass(){
    const navigate=useNavigate();
    const[email,setEmail]=useState("");
    const[error,setError]=useState("");
    async function userForgotpassword(e){
        e.preventDefault();
        try{
            const result=await axios.post('https://atg-backend-49sl.onrender.com/forgot-pass',{email});
            setError(result.data.message);
        }catch(err){
            setError('failed! Try again');
            console.error(err.message);
        }
    }
    return(
        <div className="container">
            <form onSubmit={userForgotpassword}>
                <input type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                <button type="submit">Forgot Password</button>
                <button type="button" onClick={()=>navigate('#/login')}>Go to login</button>
            </form>
            {error && <p className="message">{error}</p>}
        </div>
    )
}
export default Forgotpass;
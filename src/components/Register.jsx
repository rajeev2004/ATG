import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import './Register.css';
function Register(){
    const navigate=useNavigate();
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[pass,setPass]=useState("");
    const[error,setError]=useState("");
    async function userRegister(e){
        e.preventDefault();
        try{
            const result=await axios.post('https://atg-backend-49sl.onrender.com/register',{name,email,pass});
            setError(result.data.message);
            if(result.data.message==="user registered"){
                navigate('/homepage');
                localStorage.setItem("token",result.data.token);
            }else{
                alert('Try again');
            }
        }catch(err){
            setError('registration failed');
        }
    }
    return(
        <div className="container">
            <form className="form" onSubmit={userRegister}>
                <input type="text" placeholder="Enter Username" value={name} onChange={(e)=>setName(e.target.value)} required />
                <input type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                <input type="password" placeholder="Enter Password" value={pass} onChange={(e)=>setPass(e.target.value)} required />
                <div className="buttonclass">
                    <button type="submit">Register</button>
                    <button type="button" onClick={()=>navigate('/login')}>Already have an account?</button>
                </div>
            </form>
            {error && <p className="message">{error}</p>}
        </div>
    )
}
export default Register;
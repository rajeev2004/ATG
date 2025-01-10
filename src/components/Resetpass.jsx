import React,{useEffect, useState} from "react";
import axios from "axios";
import {useLocation,useNavigate} from "react-router-dom";
function Resetpass(){
    const [newpass,setnewpass]=useState("");
    const [error,seterror]=useState("");
    const [success,setsuccess]=useState("");
    const navigate=useNavigate();
    const location=useLocation();
    useEffect(()=>{
        const token=new URLSearchParams(location.search).get("token");
        if(!token){
            seterror('invalid or expired token');
        }
    },[location]);
    async function formSubmit(e){
        e.preventDefault();
        const token=new URLSearchParams(location.search).get("token");
        if(!token){
            seterror('token is missing');
            return;
        }
        try{
            const result=await axios.post('https://atg-backend-49sl.onrender.com/reset-Password',{token,newpass});
            setsuccess(result.data.message);
            setTimeout(()=>navigate('#/login'),4000);
        }catch(err){
            console.error(err.message);
            seterror('error setting password');
        }
    }
    return(
        <div>
            {error && <p className="message">{error}</p>}
            {success && <p className="message">{success}</p>}
            <form onSubmit={formSubmit}>
                <input type="password" placeholder="enter new password" value={newpass} onChange={(e)=>setnewpass(e.target.value)} required/>
                <button type="submit">Change password</button>
            </form>
        </div>
    )
}
export default Resetpass;
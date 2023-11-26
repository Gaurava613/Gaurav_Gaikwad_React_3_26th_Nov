import { useState } from "react";
import Signup from "../comp2/signup";


function SignUp(){

const[username,setUserName]=useState('')
const[email,setEmail]=useState('')
const[password,setPassword]=useState('')

const clickSignup=()=>{
    const userData={username,email,password}
    console.log(userData)
}

return(
    <div>
        <span>User Name</span>
        <input  placeholder="UserName" value={username} onChange={(e)=>setUserName(e.target.value)} />
        
        <span>Email</span>
        <input  placeholder="UserName" value={email} onChange={(e)=>setEmail(e.target.value)} />
        
        <span>Password</span>
        <input  placeholder="UserName" value={password} onChange={(e)=>setPassword(e.target.value)} />

    <button onClick={clickSignup}>Sign Up</button>

    </div>
)


}

export default SignUp;


import { useState } from "react";

function LogIn(){
    const[userName,setUserName]=useState('')
    const[[password],setPassword]=useState('')

    const clickLogIn=()=>{
        const userLogin={userName,password}
    }

    return(
        <div>
            <span>Username</span>
            <input placeholder="Username" value={userName} onChange={(e)=>setUserName(e.target.value)} />
            <span>Password</span>
            <input placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />

<button onClick={clickLogIn}>Log In</button>
        </div>
    )

}

export default LogIn;



import { useEffect, useState } from "react";
import Signup from "../comp2/signup";
import { useAuthContext } from "../components/AuthContext";
import { useNavigate } from "react-router-dom";


const SignUp = () => {

    const { signup, token } = useAuthContext();
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            navigate('/');
        }
    })

    const handleSignUp = (e) => {
        e.preventDefault();
        let formData = {
            username: username,
            email: email,
            password: password
        }
        // Validate and process form data
        signup(formData);
        navigate('/login')

    };


    const clickSignup = () => {
        const userData = { username, email, password }
        console.log(userData)
    }

    return (
        <div>
            <span>User Name</span>
            <input placeholder="UserName" value={username} onChange={(e) => setUserName(e.target.value)} />

            <span>Email</span>
            <input placeholder="UserName" value={email} onChange={(e) => setEmail(e.target.value)} />

            <span>Password</span>
            <input placeholder="UserName" value={password} onChange={(e) => setPassword(e.target.value)} />

            <button onClick={handleSignUp}>Sign Up</button>

        </div>
    )


}

export default SignUp;
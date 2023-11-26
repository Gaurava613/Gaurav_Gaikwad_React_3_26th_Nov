import { useEffect, useState  } from "react";
import { useAuthContext } from "../components/AuthContext";
import { useNavigate  } from "react-router-dom";

function LogIn() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const { user,token, login } = useAuthContext();

    useEffect(() => {
        if (token) {
            navigate('/');
        }
    })

    const handleLogin = (e) => {
        e.preventDefault();
        // Perform login authentication using 'user' state or other methods
        login({ username: userName, password: password });
        navigate('/')
    };

    return (
        <div>
            <span>Username</span>
            <input placeholder="Username" value={userName} onChange={(e) => setUserName(e.target.value)} />
            <span>Password</span>
            <input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <button onClick={handleLogin}>Log In</button>
        </div>
    )

}

export default LogIn;
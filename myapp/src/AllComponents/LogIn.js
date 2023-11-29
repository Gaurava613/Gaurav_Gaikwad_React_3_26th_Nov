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
        <div className="container mt-5">
      <h1 className="display-4 text-center mb-4">Log In</h1>
        <div className="row">
          <div className="col-md-6 offset-md-3 bg-dark text-light p-4">
            <div className="form-group mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
      
            <div className="form-group mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
      
            <button className="btn btn-primary" onClick={handleLogin}>
              Log In
            </button>
          </div>
        </div>
      </div>
    )

}

export default LogIn;
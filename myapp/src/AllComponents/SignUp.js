import { useEffect, useState } from "react";
// import Signup from "../comp2/signup";
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
      
        <div className="container mt-5">
      <h1 className="display-4 text-center mb-4">Sign Up</h1>
        <div className="row">
          <div className="col-md-6 offset-md-3 bg-dark text-light p-4">
            <div className="form-group mb-3">
              <label htmlFor="username" className="form-label">
                User Name
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="UserName"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
      
            <div className="form-group mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
      
            <button className="btn btn-primary" onClick={handleSignUp}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    )


}

export default SignUp;
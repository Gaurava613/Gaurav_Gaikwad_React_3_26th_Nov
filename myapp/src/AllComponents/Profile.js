import React, { useEffect } from 'react'
import { useAuthContext } from '../components/AuthContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const { token, logout } = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate('/signup');
        }
    })

    const logOut = () => {
        logout();
    }
    return (
        <div>Profile
            <br>
            </br>
            <button onClick={logOut}>Logout</button>
        </div>

    )
}

export default Profile
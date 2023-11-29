import React, { useEffect } from 'react';
import { useAuthContext } from '../components/AuthContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { token, logout, login } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/signup');
    }
  }, [token, navigate]);

  const logOut = () => {
    logout();
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 bg-light p-4">
        <h1 className="display-4 text-center mb-4">User Profile</h1>
          <br />

          <div>
            <div>
              <h1>Hello !</h1>
            </div>

            <div>
              <h3>This is Your Profile Page</h3>
            </div>

            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec sem in justo pellentesque facilisis. Sed nec
                turpis ac risus pharetra mollis. Nullam ut faucibus velit.
                Mauris in libero vel justo euismod fermentum.
              </p>
            </div>
          </div>

          <button className="btn btn-danger" onClick={logOut}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

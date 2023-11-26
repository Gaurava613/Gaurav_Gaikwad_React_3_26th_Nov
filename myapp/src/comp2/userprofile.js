// UserDetail.js
import React from 'react';

const UserDetail = ({ user, onLogout }) => {
  return (
    <div>
      <h2>User Detail</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Access Token: {user.accessToken}</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default UserDetail;

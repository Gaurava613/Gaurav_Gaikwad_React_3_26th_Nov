// import logo from './logo.svg';
// import './App.css';
// import { AuthProvide } from './components/AuthContext';
// import UserInfo from './components/Userinfo';
// import SignupPage from './components/Signup';

import LogIn from "./AllComponents/LogIn";
import SignUp from "./AllComponents/SignUp";


// function App() {
//   return (
//     <div>
//       <AuthProvide>
//         <h1>Authentication App</h1>
//         <UserInfo/>
//         <SignupPage></SignupPage>
//       </AuthProvide> 
    
      
//     </div>
    
//   )
// }

// export default App;

// import React, { useState, useEffect } from 'react';
// import UserDetail from './comp2/userprofile';
// import Login from './comp2/login';
// import Signup from './comp2/signup';


// const App = () => {
//   const [user, setUser] = useState(null);

//   const usersDatabase = [
//     { username: 'user1', password: 'password1' },
//     { username: 'user2', password: 'password2' },
//   ];

//   const handleSignup = (userData) => {
//     if (usersDatabase.some((user) => user.username === userData.username)) {
//       console.error('Username already taken. Choose another username.');
//       return;
//     }

//     usersDatabase.push(userData);

//     setUser({
//       username: userData.username,
//       accessToken: generateRandomToken(),
//     });

//     console.log('Signup successful!');
//   };

//   const handleLogin = (loginData) => {
//     const matchedUser = usersDatabase.find(
//       (user) =>
//         user.username === loginData.username && user.password === loginData.password
//     );

//     if (matchedUser) {
//       setUser({
//         username: matchedUser.username,
//         accessToken: generateRandomToken(),
//       });

//       console.log('Login successful!');
//     } else {
//       console.error('Invalid username or password. Please try again.');
//     }
//   };

//   const handleLogout = () => {
//     setUser(null);
//     console.log('Logout successful!');
//   };

//   const generateRandomToken = () => {
//     return Math.random().toString(36).substring(2, 18);
//   };

//   useEffect(() => {
//     if (window.location.pathname === '/profile' && !user?.accessToken) {
//       window.location.href = '/signup';
//     }
//   }, [user]);

//   return (
//     <div>
//       <h1>Authentication App</h1>
//       {user ? (
//         <UserDetail user={user} onLogout={handleLogout} />
//       ) : window.location.pathname === '/login' ? (
//         <Login onLogin={handleLogin} />
//       ) : (
//         <Signup onSignup={handleSignup} />
//       )}
//     </div>
//   );
// };

// export default App;

// =====================================
//comp2

// App.js
// import React, { useState } from 'react';
// import Signup from './comp2/signup';
// import Login from './comp2/login';
// import UserDetail from './comp2/userprofile';


// const App = () => {
//   const [user, setUser] = useState(null);
//   const [currentPage, setCurrentPage] = useState('signup');

//   const handleSignup = (userData) => {
//     // Simulate signup logic
//     console.log('Signup data:', userData);
//   };

//   const handleLogin = (loginData) => {
//     // Simulate login logic
//     console.log('Login data:', loginData);

//     // Simulate generating access token on successful login
//     const accessToken = Math.random().toString(36).substring(2, 18);

//     // Set user state
//     setUser({ ...loginData, accessToken });

//     // Change page to UserDetail
//     setCurrentPage('userDetail');
//   };

//   const handleLogout = () => {
//     // Clear user state
//     setUser(null);
//     // Change page to Signup
//     setCurrentPage('signup');
//   };

//   const renderPage = () => {
//     switch (currentPage) {
//       case 'signup':
//         return <Signup onSignup={handleSignup} onNavigate={setCurrentPage} />;
//       case 'login':
//         return <Login onLogin={handleLogin} onNavigate={setCurrentPage} />;
//       case 'userDetail':
//         return <UserDetail user={user} onLogout={handleLogout} />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div>
//       <h1>Authentication App</h1>
//       {renderPage()}
//     </div>
//   );
// };

// export default App;


// =========================================
//ALlComponents

function App(){
  return(
    <div>
    <h1>  <label>Sign Up</label></h1>
      <SignUp/>
      <h1> <label> Log In</label></h1>

      <LogIn/>
    </div>
  )
}

export default App;

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AuthProvide, useAuthContext } from './components/AuthContext';
import SignUp from './AllComponents/SignUp';
import LogIn from './AllComponents/LogIn';
import Profile from './AllComponents/Profile';



const Home = () => {
  const { token } = useAuthContext();

  return (
    <div>
      {token ? (
        <div>Logged In</div>
      ) : (
        <div>
          <Link to="/login">Log In</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      )}
    </div>
  );
};

const App = () => {
  return (
    <AuthProvide>
      <Router>
        <Routes>
          {/* <Route exact path="/login" component={LogIn} /> */}
          <Route exact path="/login" element={<LogIn/>} />
          <Route exact path="/signup" element={<SignUp/>} />
          <Route path="/" element={<Profile/>} />
        </Routes  >
      </Router>
    </AuthProvide>
  );
};

export default App;
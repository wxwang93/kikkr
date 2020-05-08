import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div className ="navbar-but">
      <nav className="login-but">
        <Link to="/login">
          <button type="button">
            Log In
          </button>
        </Link>
      </nav>
      <nav className="signup-but">
        <Link to="/signup">
          <button type="button">
            Sign Up
          </button>
        </Link>
      </nav>
    </div>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.first_name}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;

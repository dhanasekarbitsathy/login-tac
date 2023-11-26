// Login.jsx
import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Validate the username and password and submit the login form
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Welcome to TAC BIT</h1>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBWcX7to0lGMuFMpKSg-d7ltki6uc8Q3s5og&usqp=CAU" alt="TAC BIT Logo" className="login-logo" />
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-input-group">
          <label htmlFor="username" className="login-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="login-input"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="login-input-group">
          <label htmlFor="password" className="login-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="login-input"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit" className="login-button">
          LOGIN
        </button>
        <div className="login-or">or</div>
        <button type="button" className="login-google-button">
          Sign in with Google
        </button>
      </form>
      <div className="login-footer">
        <span className="login-copyright">© 2023 TAC BIT. All rights reserved.</span>
      </div>
    </div>
  );
};

export default Login;

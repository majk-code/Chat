import React from 'react';
import './Login.css'

const Login = () => {
  return (
    <div className="login">
      <h1>Login</h1>

      <form action="submit">
        <label htmlFor="name">
          <span>Username</span>
        </label>
        <input 
          type="text" 
          placeholder='Type username' 
        />

        <label htmlFor="name">
          <span>Password</span>
        </label>
        <input 
          type="password" 
          placeholder='Type password' 
        />

        <a href="#">Don't have account?</a>
        <div className="btn">Login</div>
      </form>
    </div>
  );
};

export default Login;

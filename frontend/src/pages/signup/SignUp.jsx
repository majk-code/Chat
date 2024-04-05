import React from 'react'
import GenderCheckbox from './GenderCheckbox'
import './SignUp.css'

const SignUp = () => {
  return (
    <div className="signup">
      <h1>SignUp</h1>
      <form action="submit">
        <label>
          <span>Full Name</span>
        </label>
        <input 
          type="text" 
          placeholder='Type fullname' 
        />
        <label>
          <span>Username</span>
        </label>
        <input 
          type="text" 
          placeholder='Type username' 
        />
        <label>
          <span>Password</span>
        </label>
        <input 
          type="password" 
          placeholder='Type password' 
        />
        <label>
          <span>Confirm Password</span>
        </label>
        <input 
          type="password" 
          placeholder='Confirm password' 
        />

        <GenderCheckbox/>
        
        <a href="#">Have account? Log in</a>
        <div className="btn">Login</div>
      </form>
    </div>
  )
}

export default SignUp
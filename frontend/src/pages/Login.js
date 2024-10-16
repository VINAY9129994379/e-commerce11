import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [currentState, setCurrentState] = useState('Sign Up');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    // Add form submission logic here
  };

  return (
    <div className="login">
      <form onSubmit={onSubmitHandler} className="login-form">
        <div>
          <p>{currentState}</p>
          <hr />
        </div>
        {currentState === 'Sign Up' && <input type="text" placeholder="Name" />}
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <div className="login-password-forgot">
          <p>Forgot your password?</p>
          {currentState === 'Login' ? (
            <p onClick={() => setCurrentState('Sign Up')}>Create account</p>
          ) : (
            <p onClick={() => setCurrentState('Login')}>Login here</p>
          )}
        </div>
        <button type="submit">{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
      </form>
    </div>
  );
}

export default Login;

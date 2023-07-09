import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'firebase/auth';
import { logInWithEmailAndPassword } from '../Firebase';

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const history = useNavigate();

  

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      const form = event.target as HTMLFormElement;
      const email = form.email.value;
      const password = form.pwd.value;

      // Perform the login using Firebase Authentication
      await logInWithEmailAndPassword(email, password);

      // Redirect the user to the home page after successful login
      history('/');
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('Invalid email or password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
 
  
  return (
    <div className="login">
      <section className="login-ui">
        <div className="login-form">
          <h3>Login to Your Account</h3>
          <form onSubmit={handleLogin}>
            <label htmlFor="email">Email Address</label><br />
            <input type="email" id="email" name="email" /><br />
            <label htmlFor="pwd">Password:</label><br />
            <input type="password" id="pwd" name="pwd" />
            <button className="login-btn">Login</button>
          </form>
          {errorMessage && <p>{errorMessage}</p>}
          <p>Don't have an account? <a href="./Signup">Sign up!</a></p>
        </div>
      </section>
      <section className="backdrop">
        <div>
          <h2>CareFinder</h2>
          <p>Seamless access to medical services</p>
          <img src="../images/rectangle-113.png" />
        </div>
      </section>
    </div>
  );
};

export default Login;
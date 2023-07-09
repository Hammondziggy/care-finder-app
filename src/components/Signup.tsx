import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import SocialMediaAuth, { SocialMediaProvider } from './socialMediaAuth';
import {
  signInWithGoogle,
  signInWithTwitter,
  signInWithFacebook,
  registerWithEmailAndPassword,
} from '../Firebase';

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  const handleSocialMediaAuth = async (provider: SocialMediaProvider) => {
    try {
      setIsLoading(true);
      let authProvider = null;

      switch (provider) {
        case 'google':
          authProvider = signInWithGoogle();
          break;
        case 'twitter':
          authProvider = signInWithTwitter();
          break;
        case 'facebook':
          authProvider = signInWithFacebook();
          break;
        default:
          throw new Error('Unsupported social media provider');
      }

      if (authProvider) {
        await authProvider;
        // Redirect the user to the login page after successful authentication
        history('/login');
      }
    } catch (error) {
      // Handle any errors that occur during authentication
      console.error('Error during social media authentication:', error);
      setErrorMessage('An error occurred during social media authentication. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      const { username, email, pwd } = event.currentTarget.elements as typeof event.currentTarget.elements & {
        username: { value: string };
        email: { value: string };
        pwd: { value: string };
      };

      const name = username.value;
      const userEmail = email.value;
      const userPassword = pwd.value;

      // Perform the sign-up using Firebase Authentication
      await registerWithEmailAndPassword(name, userEmail, userPassword);

      // Redirect the user to the login page after successful signup
      history('/login');
    } catch (error) {
      console.error('Error during signup:', error);
      setErrorMessage('An error occurred during sign-up. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="signup">
      <section className="signup-ui">
        <div className="signup-form">
          <h3>Create An Account</h3>
          <form onSubmit={handleSignup}>
            <label htmlFor="username">Name</label><br />
            <input type="text" id="username" name="username" value={username} onChange={(event) => setUsername(event.target.value)} /><br />
            <label htmlFor="email">Email Address</label><br />
            <input type="email" id="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} /><br />
            <label htmlFor="password">Password:</label><br />
            <input type="password" id="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} />
            <button className="signup-btn" type="submit">Create Account</button>
          </form>
          <p>OR</p>
          <SocialMediaAuth onSocialMediaAuth={handleSocialMediaAuth} />
          <p>Already have an account? <a href="./Login">Login!</a></p>
        </div>
      </section>
      <section className="backdrop">
        <div>
          <h2>CareFinder</h2>
          <p>Join Our Community</p>
          <p>Enjoy seamless access to medical services</p>
          <img src="../images/rectangle-113.png" alt="Backdrop" />
        </div>
      </section>
    </div>
  );
};

export default Signup;
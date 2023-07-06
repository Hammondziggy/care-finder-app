import firebase from 'firebase/app';
//import 'firebase/auth';
import { auth } from '../Firebase';


type SocialMediaAuthProps = {
  onSocialMediaAuth: (provider: firebase.auth.AuthProvider) => void;
};

const SocialMediaAuth: React.FC<SocialMediaAuthProps> = ({ onSocialMediaAuth }) => {
  const authenticateWithSocialMedia = async (provider: firebase.auth.AuthProvider) => {
    try {
      await firebase.auth().signInWithRedirect(provider);

      // Call onSocialMediaAuth after successful authentication
      onSocialMediaAuth(provider);
    } catch (error) {
      console.log('Error authenticating with social media:', error);
    }
  };

  return (
    <div>
      <p>Authenticate with social media:</p>
      <div>
        {/* Google */}
        <button onClick={() => authenticateWithSocialMedia(new firebase.auth.GoogleAuthProvider())}>
                <img src="../images/devicon-google.svg" alt="Google" />
        </button>
       
        {/* Twitter */}
        <button onClick={() => authenticateWithSocialMedia(new firebase.auth.TwitterAuthProvider())}>
          <img src="/path/to/twitter-icon.png" alt="Twitter" />
        </button>

         {/* Facebook */}
         <button onClick={() => authenticateWithSocialMedia(new firebase.auth.FacebookAuthProvider())}>
          <img src="../images/logos-facebook.svg" alt="Facebook" />
        </button>
      </div>
    </div>
  );
};

export default SocialMediaAuth;
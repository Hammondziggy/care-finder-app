import { signInWithPopup, AuthProvider } from 'firebase/auth';
import { auth, googleProvider, twitterProvider, facebookProvider } from '../Firebase';

export type SocialMediaProvider = 'google' | 'twitter' | 'facebook';

type SocialMediaAuthProps = {
  onSocialMediaAuth: (provider: SocialMediaProvider) => void;
};

const SocialMediaAuth: React.FC<SocialMediaAuthProps> = ({ onSocialMediaAuth }) => {
  const authenticateWithSocialMedia = async (provider: SocialMediaProvider) => {
    try {
      if (!provider) {
        throw new Error('Social media provider is not provided');
      }

      let authProvider: AuthProvider | null = null;
      switch (provider) {
        case 'google':
          authProvider = googleProvider;
          break;
        case 'twitter':
          authProvider = twitterProvider;
          break;
        case 'facebook':
          authProvider = facebookProvider;
          break;
        default:
          throw new Error('Unsupported social media provider');
      }

      if (authProvider) {
        await signInWithPopup(auth, authProvider);
        // Call onSocialMediaAuth after successful authentication
        onSocialMediaAuth(provider);
      }
    } catch (error) {
      console.log('Error authenticating with social media:', error);
    }
  };

  return (
    <div>
      <p>Authenticate with social media:</p>
      <div>
        {/* Google */}
        <button onClick={() => authenticateWithSocialMedia('google')}>
          <img src="../images/devicon-google.svg" alt="Google" />
        </button>

        {/* Twitter */}
        <button onClick={() => authenticateWithSocialMedia('twitter')}>
          <img src="/path/to/twitter-icon.png" alt="Twitter" />
        </button>

        {/* Facebook */}
        <button onClick={() => authenticateWithSocialMedia('facebook')}>
          <img src="../images/logos-facebook.svg" alt="Facebook" />
        </button>
      </div>
    </div>
  );
};

export default SocialMediaAuth;
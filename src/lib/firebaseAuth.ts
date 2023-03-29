import { getAuth, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';
import { auth as firebaseAuth } from './firebaseInit';
import { userStore } from './userStore';

const auth = getAuth(firebaseAuth);
const provider = new GoogleAuthProvider();

const onAuthStateChanged = (callback) => {
  return auth.onAuthStateChanged((firebaseUser) => {
    userStore.set(firebaseUser);
    callback(firebaseUser);
  });
};

const handleSignIn = async () => {
  try {
    await signInWithRedirect(auth, provider);
  } catch (error) {
    console.error('Error signing in with Google:', error);
  }
};

const handleSignOut = () => {
  return auth.signOut();
};

export { onAuthStateChanged, handleSignIn, handleSignOut };

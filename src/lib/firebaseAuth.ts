import type { signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';
import type { Auth, User } from 'firebase/auth';
import { auth as firebaseAuth } from './firebaseInit';
import { userStore } from './userStore';
import { signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';

const auth: Auth = firebaseAuth;
const provider = new GoogleAuthProvider();

const onAuthStateChanged = (callback: (firebaseUser: User | null) => void) => {
  return auth.onAuthStateChanged((firebaseUser: User | null) => {
    if (firebaseUser !== null) {
      userStore.set(firebaseUser);
    }
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

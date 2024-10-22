import { GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../services/firebase';

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async (setUser, setOpen) => {
  try {
    const result = await signInWithPopup(auth, provider);
    const userData = result.user;

    const userRef = doc(db, "users", userData.uid);
    await setDoc(userRef, {
      displayName: userData.displayName,
      email: userData.email,
      photoURL: userData.photoURL,
      createdAt: new Date(),
    }, { merge: true });

    setUser(userData);
    setOpen(false);
    
  } catch (error) {
    console.error('Error during sign-in: ', error);
  }
};

export const handleSignOut = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    console.error('Error during sign-out: ', error);
  }
};


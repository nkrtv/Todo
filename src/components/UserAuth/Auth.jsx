import { useState, useEffect, useCallback } from 'react';
import UserPanel from './UserPanel';
import SignInDialog from './SignInDialog';
import { handleSignOut } from '../../services/authService';
import { auth } from '../../services/firebase';

const Auth = () => {
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      if (!user) {
        setOpen(false); 
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignIn = useCallback(() => {
    setOpen(true); 
  }, []);

  const handleUserSignOut = useCallback(async () => {
    await handleSignOut(setUser, setOpen);
    setOpen(false); 
}, [setUser, setOpen]);


  return (
    <>
      <UserPanel user={user} onSignOut={handleUserSignOut} onSignIn={handleSignIn} />
      <SignInDialog open={open} onClose={() => setOpen(false)} setUser={setUser} />
    </>
  );
};

export default Auth;





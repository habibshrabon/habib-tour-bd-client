import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  //Google sign in content
  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider).then((result) => {
      //   console.log(result.user);
      //   setUser(result.user);
    });
  };

  //observe user state change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
    return () => unsubscribed;
  }, [auth]);

  //Sign out content
  const logOut = () => {
    signOut(auth).then(() => {});
  };

  return {
    user,
    signInUsingGoogle,
    logOut,
  };
};
export default useFirebase;

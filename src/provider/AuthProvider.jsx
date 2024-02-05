import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../../firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // github sign in
  const githubSignIn = () => {
    const githubProvider = new GithubAuthProvider();
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  // google sign in
  const googleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // create user email-password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user email-password
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // signOut
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // update user profile
  const userProfile = (user, name, photo) => {
    setLoading(true);
    return updateProfile(user, {
      displayName: name,
      photoURL: photo,
    });
  };

  // observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    githubSignIn,
    googleSignIn,
    createUser,
    logIn,
    logOut,
    userProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AuthProvider;

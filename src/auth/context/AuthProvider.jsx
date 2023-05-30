import React, { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import {
  AUTH_KEY_LOCAL_STORAGE,
  AUTH_TYPES,
  authInitialState,
  authInitializer,
  authReducer,
} from "../reducer/authReducer";

import { auth } from "../../config/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(
    authReducer,
    authInitialState,
    authInitializer
  );
  // const [authState, setAuthstate] = useState(autInitialvalue)

  const login = (user) => {
    dispatch({
      type: AUTH_TYPES.LOGIN,
      payload: user,
    });

    localStorage.setItem(
      AUTH_KEY_LOCAL_STORAGE,
      JSON.stringify({ isLoggedIn: true })
    );
  };

  const logout = () => {
    dispatch({
      type: AUTH_TYPES.LOGOUT,
      user: null,
    });

    localStorage.removeItem(AUTH_KEY_LOCAL_STORAGE);
  };

  const signup = async (email, password) => {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(response);
  };

  const signin = async (email, password) => {
    const response = await signInWithEmailAndPassword(auth, email, password);

    console.log(response);
  };

  const loginWithGoogle = async () => {
    const responseGoogle = new GoogleAuthProvider();
    return await signInWithPopup(auth, responseGoogle);
  };

  const signout = async () => {
    const response = await signOut(auth);
    console.log(response);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: authState.isLoggedIn,
        login,
        logout,
        user: authState.user,
        signup,
        signin,
        loginWithGoogle,
        signout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

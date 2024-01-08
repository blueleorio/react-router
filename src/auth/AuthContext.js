import React, { createContext, useContext, useState } from "react";
import { fakeAuthProvider } from "./auth";
import { useLocation } from "react-router-dom";

const Auth = createContext(null);

// UseAuth - to call the context
const useAuth = () => {
  return useContext(Auth);
};
// I still dont know what this does! need to revisit UseContext tutorial
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signin = (newUser, callback) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser);
      callback();
    });
  };

  const signout = (callback) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  const value = { user, signin, signout };

  return <Auth.Provider value={value}>{children}</Auth.Provider>;
};

// Wrapper wateva this is
const RequireAuth = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();
  // Use auth and location as needed
  return children;
};

export { AuthProvider, useAuth, RequireAuth };

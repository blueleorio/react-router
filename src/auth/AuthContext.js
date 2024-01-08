import React, { createContext, useContext, useState } from "react";

const Auth = createContext(null);

const fakeAuthProvider = {
  isAuthenticated: false,
  signin(callback) {
    setTimeout(() => {
      // Simulating an asynchronous login operation
      fakeAuthProvider.isAuthenticated = true;
      callback();
    }, 100);
  },
  signout(callback) {
    setTimeout(() => {
      // Simulating an asynchronous logout operation
      fakeAuthProvider.isAuthenticated = false;
      callback();
    }, 100);
  },
};

const useAuth = () => {
  return useContext(Auth);
};

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

const RequireAuth = ({ children }) => {
  const auth = useAuth();
  // You can use location if needed
  return children;
};

export { AuthProvider, useAuth, RequireAuth };

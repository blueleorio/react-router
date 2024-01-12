import React, { createContext, useContext, useState, useEffect } from "react";

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
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch("http://localhost:4000/jobs");
        const response = await fetch("/jobs.json"); // Jobs.json is inside Public folder
        const data = await response.json();
        setJobData(data.jobs);
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once

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

  const value = { user, jobData, signin, signout };

  return <Auth.Provider value={value}>{children}</Auth.Provider>;
};

const RequireAuth = ({ children }) => {
  const auth = useAuth();
  // You can use location if needed
  return children;
};

export { AuthProvider, useAuth, RequireAuth };

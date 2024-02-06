import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in on component mount
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    if (user && user.email && user.password) {
      setLoggedIn(true);
    }
  }, []);
;
  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
};
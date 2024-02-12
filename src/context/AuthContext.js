import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [logedIn, setLogedIn] = useState(false);
  const [user, setUser] = useState({
    name:"Anup",
    email:"AHSHH@gmail.com",
    street:"bla bla",
    city:"",
    plone:"08938734848"
  });
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <AuthContext.Provider value={{logedIn,setLogedIn,user,setUser}}>
      {props.children}
    </AuthContext.Provider>
  );
};
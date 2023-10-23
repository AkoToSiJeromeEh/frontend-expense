import React, { useState, createContext, useContext, useMemo } from "react";
import {  redirect } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
 
  const [username, setUsername] = useState('Jerome');
 

  const login = (username) => {
    setUsername(username);
    redirect("/");
  };

  const logout = () => {
    setUsername(null);
  };

  const contextValue = useMemo(
    () => ({
      username,
      login,
      logout,
    }),
    [username]
  );

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
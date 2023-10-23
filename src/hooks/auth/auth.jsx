import React, { useState, createContext, useContext, useMemo } from "react";
import {  redirect } from "react-router-dom";
import ToggleState from "../ToggleState";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
 
  const [username, setUsername] = useState();
  const [isLogin , setLogin] = ToggleState(false)

  const login = (username) => {
    setUsername(username);
    setLogin(false)
    setTimeout(() => {
      setLogin(true)
    }, 3000);
    redirect("/");
  };

  const logout = () => {
    setUsername(null);
  };

  const contextValue = useMemo(
    () => ({
      username,
      isLogin,
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

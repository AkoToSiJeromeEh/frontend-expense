import React, { useState, createContext, useContext, useMemo } from "react";
import { redirect } from "react-router-dom";
import ToggleState from "../ToggleState";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState();
  const [isLogin, setLogin] = ToggleState();


  const login = (username) => {
    setUsername(username);
    setLogin(true);
    setTimeout(() => {
      setLogin(false);
      redirect("/home");
    }, 3000);
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
    [username, isLogin]
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

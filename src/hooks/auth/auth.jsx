import React, { useState, createContext, useContext, useMemo } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
 
  const [username, setUsername] = useState();

  const login = (username) => {
    setUsername(username);
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
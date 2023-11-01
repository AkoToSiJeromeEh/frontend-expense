import { useState, createContext, useContext, useMemo } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const storedUsername = localStorage.getItem("username");
  const storedToken = localStorage.getItem("accessToken");
  const [username, setUsername] = useState(storedUsername || null);
  const [token, setToken] = useState(storedToken || null);
  const [isLogin, setIsLogin] = useState(false); 
  const login = async (username, token) => {
    setUsername(username);
    setToken(token);
    localStorage.setItem("username", username);
    localStorage.setItem("accessToken", token);
    setIsLogin(true); 
    setTimeout(() => {
      setIsLogin(false); 
    }, 3000);
  };

  const logout = () => {
    setUsername(null);
    setToken(null);
    console.log("Logging out");
    localStorage.removeItem("username");
    localStorage.removeItem("accessToken");
    setIsLogin(false); 
  };

  const contextValue = useMemo(
    () => ({
      username,
      token,
      isLogin, 
      login,
      logout,
    }),
    [username, token, isLogin]
  );

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
export const useAuth = () => {
  return useContext(AuthContext);
};

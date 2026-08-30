import { useQuery, useQueryClient } from "@tanstack/react-query";
import { createContext, useState } from "react";
import { getMe, loginRequest } from "../services/requests/auth";
import { useEffect } from "react";
const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const queryClient = useQueryClient();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem("accessToken"));
  const { data, isLoading, isError } = useQuery({
    queryKey: ["auth-me"],
    queryFn: getMe,
    enabled: !!token,
    retry: false,
  });
  useEffect(() => {
    data && setUser(data);
  }, [data]);
  useEffect(() => {
    if (isError) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      setToken(null);
      setUser(null);
    }
  }, [isError]);
  const login = async (userData) => {
    const result = await loginRequest(userData);
    localStorage.setItem("accessToken", result.accessToken);
    localStorage.setItem("refreshToken", result.refreshToken);
    setToken(result.accessToken);
    setUser(result);
    queryClient.invalidateQueries({ queryKey: ["auth-me"] });
    return result
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        isLoading,
        isLogin : !!user
      }}
    >{children}</AuthContext.Provider>
  );
};
export { AuthProvider, AuthContext };
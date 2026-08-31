import { useQuery, useQueryClient } from "@tanstack/react-query";
import { createContext, useState } from "react";
import { getMe, loginRequest } from "../services/requests/auth";
import { useEffect } from "react";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const queryClient = useQueryClient();
  const [token, setToken] = useState(() => localStorage.getItem("accessToken"));

  const {
    data: user,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["auth-me"],
    queryFn: getMe,
    enabled: !!token,
    retry: false,
  });

  useEffect(() => {
    if (isError) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      setToken(null);
      queryClient.removeQueries({ queryKey: ["auth-me"] });
    }
  }, [isError]);

  const login = async (userData) => {
    const result = await loginRequest(userData);
    localStorage.setItem("accessToken", result.accessToken);
    localStorage.setItem("refreshToken", result.refreshToken);
    setToken(result.accessToken);
    queryClient.setQueryData(["auth-me"], result);
    return result;
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setToken(null);
    queryClient.removeQueries({ queryKey: ["auth-me"] });
  };

  const isCheckingAuth = !!token && isLoading;

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
        isLoading: isCheckingAuth,
        isLogin: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { AuthProvider, AuthContext };

import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { Navigate, Outlet } from "react-router";
const ProtectRoots = () => {
  const { isLoading, isLogin } = useContext(AuthContext);
  if (isLoading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center dark:bg-black bg-white">
        <div className="size-8 border-3 border-gray-200 dark:border-zinc-700 border-t-blue-600 rounded-full animate-spin" />
      </div>
    );
  }
  if (!isLogin) {
    return <Navigate to="/login" replace/>
  }
  return <Outlet/>
};
export default ProtectRoots;

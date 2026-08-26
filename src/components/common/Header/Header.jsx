import { Sun, Bell, Moon } from "lucide-react";
import UserProfile from "./elements/UserProfile";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
const Header = () => {
  const [theme, toggle] = useContext(ThemeContext);
  return (
    <header className="w-full bg-white dark:bg-black py-7 px-6 md:px-16 flex justify-between items-center fixed z-50 shadow-sm dark:shadow-zinc-950 border-b border-gray-100 dark:border-zinc-900">
      <UserProfile />
      <div className="flex items-center gap-x-3">
        <button
          className="flex items-center gap-x-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 rounded-full font-medium text-sm cursor-pointer hover:opacity-90 transition-opacity"
          onClick={toggle}
        >
          {theme === "dark" ? (
            <>
              <Sun size={16} />
              Light Mode
            </>
          ) : (
            <>
              <Moon size={16} />
              Dark Mode
            </>
          )}
        </button>
        <button className="relative flex items-center justify-center size-10 rounded-full bg-gray-100 dark:bg-zinc-900 hover:bg-gray-200 dark:hover:bg-zinc-800 cursor-pointer transition-colors">
          <Bell size={18} color={theme === "dark" ? "#fff" : "#000"} />
          <span className="absolute top-2 right-2.5 size-1.5 rounded-full bg-red-500" />
        </button>
      </div>
    </header>
  );
};
export default Header;

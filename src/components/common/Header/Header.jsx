import { Sun, Bell, Moon, Menu } from "lucide-react";
import UserProfile from "./elements/UserProfile";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
const Header = ({ onMenuClick }) => {
  const [theme, toggle] = useContext(ThemeContext);
  return (
    <header className="w-full bg-white dark:bg-black py-7 px-1.5 max-sm:px-4 md:px-16 flex justify-between items-center fixed z-30 shadow-sm dark:shadow-zinc-950 border-b border-gray-100 dark:border-zinc-900">
      <div className="flex items-center gap-x-3">
        <button
          onClick={onMenuClick}
          className="md:hidden flex items-center justify-center size-10 rounded-full bg-gray-100 dark:bg-zinc-900 hover:bg-gray-200 dark:hover:bg-zinc-800 cursor-pointer transition-colors shrink-0"
          aria-label="Open menu"
        >
          <Menu size={20} className="dark:text-white" />
        </button>
        <UserProfile />
      </div>
      <div className="flex items-center sm:gap-x-3 gap-x-1">
        <button
          className="hidden sm:flex items-center gap-x-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 rounded-full font-medium text-sm cursor-pointer hover:opacity-90 transition-opacity"
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
        <button
          onClick={toggle}
          className="sm:hidden flex items-center justify-center size-10 rounded-full bg-gray-100 dark:bg-zinc-900 hover:bg-gray-200 dark:hover:bg-zinc-800 cursor-pointer transition-colors"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
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

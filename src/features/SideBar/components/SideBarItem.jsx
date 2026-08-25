import clsx from "clsx"
import { NavLink } from "react-router"
const SideBarItem = ({ title, link, icon }) => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        clsx(
          "flex items-center gap-x-3 rounded-xl py-2.5 px-3.5 transition-colors duration-150",
          isActive
            ? "bg-blue-600 text-white font-semibold"
            : "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-zinc-800"
        )
      }
    >
      {icon}
      <li className="list-none">{title}</li>
    </NavLink>
  );
};
export default SideBarItem
import clsx from "clsx"
import { NavLink } from "react-router"
const SideBarItem = ({ title, link, icon }) => {
    return (
        <NavLink to={link} className={({ isActive }) => clsx("flex items-center gap-x-1.5", isActive ? "text-blue-600 font-semibold text-xl" : "dark:text-white")}>{icon}<li>{title}</li></NavLink>
    )
}
export default SideBarItem
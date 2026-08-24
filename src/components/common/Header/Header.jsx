import { Sun, Bell, Moon } from "lucide-react"
import UserProfile from "./elements/UserProfile"
import { useContext } from "react"
import { ThemeContext } from "../../../context/ThemeContext"
const Header = ({ isLogin }) => {
    const [theme, toggle] = useContext(ThemeContext)
    return (
        <header className="w-full bg-gray-50 py-4 px-36 flex justify-between items-center dark:bg-neutral-950 shadow-lg border-b-4 dark:border-white fixed z-50">
            <UserProfile/>
            <div className="gap-x-2 *:rounded-full *:border-2 *:border-gray-200 *:cursor-pointer flex items-center">
                <button className="dark:bg-white bg-gray-950 *:flex *:items-center px-3 font-medium py-1.5 *:gap-x-2 dark:text-black text-white transition-all duration-75"  onClick={toggle}>{theme === "dark" ? <p>Light Mode <Sun color="#000"/></p> : <p>Dark Mode <Moon color="#fff"/></p>}</button>
                <button className="bg-white p-1.5"><Bell/></button>
            </div>
        </header>
    )
}
export default Header
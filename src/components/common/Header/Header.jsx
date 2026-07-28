import { Sun, Bell, Moon } from "lucide-react"
import UserProfile from "./elements/UserProfile"
import { useContext } from "react"
import { ThemeContext } from "../../../context/ThemeContext"
import clsx from "clsx"
const Header = ({ isLogin }) => {
    const [theme, toggle] = useContext(ThemeContext)
    return (
        <header className="w-full bg-gray-50 py-4 px-36 flex justify-between items-center dark:bg-neutral-950 shadow-lg border-b-4 dark:border-white fixed z-50">
            <UserProfile/>
            <div className="space-x-2 *:rounded-full *:p-0.5 *:border-2 *:border-gray-200 *:cursor-pointer">
                <button className={clsx(theme === "light" ? "bg-gray-950" : "bg-white")} onClick={toggle}>{theme === "light" ? <Sun color="#fff"/> : <Moon color="#000"/>}</button>
                <button className="bg-white"><Bell/></button>
            </div>
        </header>
    )
}
export default Header
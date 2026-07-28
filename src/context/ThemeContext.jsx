import { useEffect, createContext, useState } from "react";
const ThemeContext = createContext()
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem("theme")
        return savedTheme ? JSON.parse(savedTheme) : "light"
    })
    const toggle = () => {
        setTheme(prev => prev === "light" ? "dark" : "light")
    }
    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(theme))
        theme === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark")
    }, [theme])
    return <ThemeContext.Provider value={[theme, toggle]}>{children}</ThemeContext.Provider>
}
export {ThemeProvider, ThemeContext}
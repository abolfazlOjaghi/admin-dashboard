import { useEffect, useState } from "react"
export const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        const data = localStorage.getItem(key)
        return data ? JSON.parse(data) : defaultValue
    })
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])
    return [value, setValue]
}
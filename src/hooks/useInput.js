import { useState } from "react"

export const useInput = (defaultValue) => {
    const [state, setState] = useState(defaultValue)
    const handleChange = e => setState(e.target.value)
    const inputProps = {
        value : state,
        onChange : handleChange
    }
    return inputProps
}
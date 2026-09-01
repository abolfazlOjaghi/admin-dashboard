import { useState } from "react";
export const useCopy = () => {
    const [copied, setCopied] = useState(null);
    const handleCopy = (key, value) => {
        if (!value) return;
        navigator.clipboard.writeText(value);
        setCopied(key);
        setTimeout(() => setCopied(false), 2000);
    }
    return { copied, handleCopy };
}

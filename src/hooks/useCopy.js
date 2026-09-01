import { useState } from "react";
export const useCopy = () => {
    const [copied, setCopied] = useState(false);
    const handleCopy = (value) => {
        if (!value) return;
        navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }
    return { copied, handleCopy };
}

import { Copy, ClipboardCheck } from "lucide-react";
import { useState } from "react";
const InfoRow = ({ label, value }) => {
  const [copied, setCopied] = useState(false);

  const copyHandler = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <div className="space-y-2">
      <p className="ml-2">{label}</p>
      <div className="flex items-center justify-between px-6 py-3 rounded-lg dark:bg-zinc-900 bg-gray-200 shadow-xl dark:shadow-black">
        <div>
          <span>{value}</span>
        </div>
        {!copied ? (
          <Copy
            className="cursor-pointer"
            onClick={copyHandler}
          />
        ) : (
          <div className="flex items-center gap-x-1.5">
            <p className="text-lg font-medium">Copied</p>
            <ClipboardCheck />
          </div>
        )}
      </div>
    </div>
  );
};
export default InfoRow;

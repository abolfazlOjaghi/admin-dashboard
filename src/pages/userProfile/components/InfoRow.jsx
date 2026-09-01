import { Copy, Check } from "lucide-react";
import { useCopy } from "../../../hooks/useCopy";
const InfoRow = ({ label, value }) => {
  const { copied, handleCopy } = useCopy();
  return (
    <div className="space-y-1.5">
      <p className="text-xs font-medium text-gray-500 dark:text-gray-400 ml-1">
        {label}
      </p>
      <div className="flex items-center justify-between gap-x-3 px-4 py-2.5 rounded-lg bg-gray-100 dark:bg-zinc-800">
        <span className="text-sm font-medium truncate">{value || "-"}</span>
        <button
          onClick={() => handleCopy(value)}
          disabled={!value}
          className="shrink-0 cursor-pointer disabled:cursor-not-allowed disabled:opacity-40 text-gray-400 hover:text-blue-600 transition-colors"
        >
          {copied ? (
            <span className="flex items-center gap-x-1 text-xs font-semibold text-green-600">
              <Check size={16} />
              Copied
            </span>
          ) : (
            <Copy size={16} />
          )}
        </button>
      </div>
    </div>
  );
};
export default InfoRow;

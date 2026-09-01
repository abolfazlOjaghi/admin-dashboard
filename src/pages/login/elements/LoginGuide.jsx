import { KeyRound } from "lucide-react";
import { USERNAME, PASSWORD } from "../../../data/constans";
import { useCopy } from "../../../hooks/useCopy";
const LoginGuide = ({ autofill }) => {
  const { copied, handleCopy } = useCopy();
  return (
    <div className="bg-blue-600/5 border border-blue-600/20 rounded-xl p-4 space-y-2 w-96">
      <div className="flex items-center gap-x-2 text-blue-600">
        <KeyRound size={16} />
        <p className="text-sm font-semibold">Demo credentials</p>
      </div>
      <div className="space-y-1 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-gray-500 dark:text-gray-400">Username</span>
          <span className="font-mono font-medium">{USERNAME}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-500 dark:text-gray-400">Password</span>
          <span className="font-mono font-medium">{PASSWORD}</span>
        </div>
      </div>
      <div className="flex gap-x-2 justify-center">
        <button className="login-guide-button" onClick={autofill}>Autofill</button>
        <button className="login-guide-button" onClick={() => handleCopy("username", USERNAME)}>
          {copied === "username"  ? "Copied!" : "Copy username"}
        </button>
        <button className="login-guide-button" onClick={() => handleCopy("password", PASSWORD)}>
          {copied === "password" ? "Copied!" : "Copy password"}
        </button>
      </div>
    </div>
  );
};
export default LoginGuide;

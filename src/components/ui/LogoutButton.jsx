import { LogOut } from "lucide-react";
const LogOutButton = ({ action }) => {
  return (
    <button
      onClick={action}
      className=" rounded-xl py-2 text-red-600 border-2 border-red-600 hover:bg-red-600 hover:text-white transition-colors duration-150 cursor-pointer w-full font-medium flex items-center gap-x-2 justify-center"
    >
      <LogOut size={18} />
      Log out
    </button>
  );
};
export default LogOutButton;

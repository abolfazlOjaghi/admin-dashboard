import { TriangleAlert } from "lucide-react";
import LogOutButton from "../ui/LogoutButton";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import ModalCancelButton from "../ui/ModalCancelButton";
const LogoutModal = ({ cancel }) => {
    const { logout } = useContext(AuthContext)
  return (
    <div className="modal">
      <div className="flex flex-col items-center text-center gap-y-3">
        <div className="bg-red-600/10 text-red-600 rounded-full p-3">
          <TriangleAlert size={28} />
        </div>
        <h4 className="text-lg font-semibold">Are you sure for log out?</h4>
      </div>
      <div className="flex items-center gap-x-3 w-full *:flex-1">
        <ModalCancelButton cancel={cancel}/>
        <LogOutButton action={logout}/>
      </div>
    </div>
  );
};
export default LogoutModal;

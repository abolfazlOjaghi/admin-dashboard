import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";
import { useNavigate } from "react-router";

const UserProfile = () => {
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()
  return (
    <div className="flex items-center gap-x-3">
      <div className="size-11 rounded-full overflow-hidden ring-2 ring-blue-600/20 shrink-0 cursor-pointer" onClick={() => navigate(`/users/${user.id}`)}>
        <img
          src={user?.image}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <p className="font-semibold leading-tight dark:text-white">
          {user?.firstName} {user?.lastName}
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
          {user?.role}
        </p>
      </div>
    </div>
  );
};
export default UserProfile;

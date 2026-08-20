import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import DeleteButton from "../ui/DeleteButton";
const UserRow = ({ firstName, lastName, username, image, id, dependencyArray = [] }) => {
  const queryClient = useQueryClient();
  const handleDeleteUser = (userId) => {
    // Local user delete
    queryClient.setQueryData(dependencyArray, (oldData) => {
      if (!oldData) return oldData;

      return {
        ...oldData,
        users: oldData.users.filter((user) => user.id !== userId),
      };
    });
    toast.success(
      <div>
        <p className="font-medium">User removed</p>
        <p className="text-xs text-gray-500">Demo only — changes are not persisted!</p>
      </div>
    );
  };
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100 dark:bg-zinc-900 rounded-xl px-12 py-4 space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-x-3 items-center">
          <img
            src={image}
            alt=""
            className="rounded-full overflow-hidden size-20 border-2 border-gray-500"
          />
          <div>
            <p className="font-medium text-lg">
              {firstName} {lastName}
            </p>
            <span className="text-gray-500 font-semibold">@{username}</span>
          </div>
        </div>
        <div className="flex gap-x-3 *:transition-all *:duration-100">
          <button
            className="py-1.5 text-lg font-medium px-4 rounded-xl bg-gray-50 dark:bg-zinc-950 flex items-center gap-x-1.5 cursor-pointer hover:text-white hover:bg-blue-600"
            onClick={() => navigate(`/users/${id}`)}
          >
            <p>View Profile</p>
            <ChevronRight />
          </button>
          {/* <button
            onClick={() => handleDeleteUser(id)}
            className="hover:bg-red-600 hover:text-white text-red-600 border-2 border-red-600 px-6 py-1.5 rounded-xl text-lg font-medium cursor-pointer"
          >
            Delete User
          </button> */}
          <DeleteButton click={() => handleDeleteUser(id)}>Delete User</DeleteButton>
        </div>
      </div>
    </div>
  );
};
export default UserRow;

import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import DeleteButton from "../ui/DeleteButton";
import { useDeleteItem } from "../../hooks/useDeleteItem";
const UserRow = ({
  firstName,
  lastName,
  username,
  image,
  id,
  dependencyArray,
}) => {
  const deleteUser = useDeleteItem(dependencyArray, "users", "user");
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
          <DeleteButton click={() => deleteUser(id)}>Delete User</DeleteButton>
        </div>
      </div>
    </div>
  );
};
export default UserRow;

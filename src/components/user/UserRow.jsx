import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router";
import DeleteModal from "../DeleteModal";
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
  const {deleteItem : deleteUser, toggleModal, isModalOpen} = useDeleteItem(dependencyArray, "users", "User", id);
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
          <DeleteButton padding="px-6" click={toggleModal}>
            Delete User
          </DeleteButton>
        </div>
      </div>
      {isModalOpen && <DeleteModal item="user" handleDelete={deleteUser} cancel={toggleModal}/>}
    </div>
  );
};
export default UserRow;

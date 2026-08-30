import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router";
import DeleteModal from "../modal/DeleteModal";
import DeleteButton from "../ui/DeleteButton";
import { useDeleteItem } from "../../hooks/useDeleteItem";
import ModalContainer from "../../features/ModalContainer";
const UserRow = ({
  firstName,
  lastName,
  username,
  image,
  id,
  dependencyArray,
}) => {
  const {
    deleteItem: deleteUser,
    toggleModal,
    isModalOpen,
  } = useDeleteItem(dependencyArray, "users", "User", id);
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl px-6 md:px-10 py-4 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex flex-wrap gap-4 justify-between items-center">
        <div className="flex gap-x-4 items-center">
          <img
            src={image}
            alt=""
            className="rounded-full size-16 md:size-20 object-cover ring-2 ring-blue-600/20"
          />
          <div>
            <p className="font-semibold text-lg">
              {firstName} {lastName}
            </p>
            <span className="text-gray-500 dark:text-gray-400 font-medium">
              @{username}
            </span>
          </div>
        </div>
        <div className="flex gap-x-3">
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
      {isModalOpen && (
        <ModalContainer cancel={toggleModal}>
          <DeleteModal handleDelete={deleteUser} cancel={toggleModal} item="user"/>
        </ModalContainer>
      )}
    </div>
  );
};

export default UserRow;

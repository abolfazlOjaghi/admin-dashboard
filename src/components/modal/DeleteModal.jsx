import DeleteButton from "../ui/DeleteButton";
import { TriangleAlert } from "lucide-react";
const DeleteModal = ({ handleDelete, cancel, item = "item" }) => {
  return (
    <div className="modal" onClick={(e) => e.stopPropagation()}>
      <div className="flex flex-col items-center text-center gap-y-3">
        <div className="bg-red-600/10 text-red-600 rounded-full p-3">
          <TriangleAlert size={28} />
        </div>
        <h4 className="text-lg font-semibold">
          Are you sure you want to delete this {item}?
        </h4>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          This action cannot be undone.
        </p>
      </div>
      <div className="flex items-center gap-x-3 w-full *:flex-1">
        <button className="modal-cancel-button" onClick={cancel}>
          Cancel
        </button>
        <DeleteButton padding="px-4" click={handleDelete}>
          Delete
        </DeleteButton>
      </div>
    </div>
  );
};
export default DeleteModal;

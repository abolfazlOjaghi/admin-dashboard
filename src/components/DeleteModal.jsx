import DeleteButton from "./ui/DeleteButton";
import { TriangleAlert } from "lucide-react";
import { createPortal } from "react-dom";
const DeleteModal = ({ handleDelete, cancel, item = "item" }) => {
  return createPortal(
    <section
      className="w-screen h-screen bg-black/60 backdrop-blur-sm inset-0 fixed z-50 flex items-center justify-center"
      onClick={(e) => {
        e.stopPropagation();
        cancel();
      }}
    >
      <div
        className="dark:bg-zinc-900 bg-white rounded-2xl p-6 space-y-5 w-full max-w-sm mx-4 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
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
          <button
            className="cursor-pointer bg-gray-100 dark:bg-zinc-800 rounded-xl transition-colors duration-150 py-2 px-4 border-2 border-gray-500 text-base font-medium hover:bg-gray-200 dark:hover:bg-zinc-700"
            onClick={cancel}
          >
            Cancel
          </button>
          <DeleteButton padding="px-4" click={handleDelete}>
            Delete
          </DeleteButton>
        </div>
      </div>
    </section>,
    document.body,
  );
};
export default DeleteModal;

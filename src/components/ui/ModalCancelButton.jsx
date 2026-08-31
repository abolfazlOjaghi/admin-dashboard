import clsx from "clsx";

const ModalCancelButton = ({ cancel, disabeledStyles, disabeld = false }) => {
  return (
    <button
      className={clsx(
        "cursor-pointer bg-gray-100 dark:bg-zinc-800 rounded-xl transition-colors duration-150 py-2 border-2 border-gray-500 text-base font-medium hover:bg-gray-200 dark:hover:bg-zinc-700",
        disabeledStyles,
      )}
      disabled={disabeld}
      onClick={cancel}
    >
      Cancel
    </button>
  );
};
export default ModalCancelButton;

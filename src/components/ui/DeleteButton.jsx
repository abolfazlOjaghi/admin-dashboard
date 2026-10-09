import clsx from "clsx";

const DeleteButton = ({ click, children, padding }) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        click();
      }}
      className={clsx(
        "hover:bg-red-600 hover:text-white text-red-600 border-2 border-red-600  py-1.5 rounded-xl text-lg font-medium cursor-pointer transition-all duration-75 max-sm:w-full flex items-center justify-center ",
        padding,
      )}
    >
      {children}
    </button>
  );
};
export default DeleteButton;

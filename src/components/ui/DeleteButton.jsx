const DeleteButton = ({ click, children }) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        click();
      }}
      className="hover:bg-red-600 hover:text-white text-red-600 border-2 border-red-600 px-6 py-1.5 rounded-xl text-lg font-medium cursor-pointer transition-all duration-75"
    >
      {children}
    </button>
  );
};
export default DeleteButton;

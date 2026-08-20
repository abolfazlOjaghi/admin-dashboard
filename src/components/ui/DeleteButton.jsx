const DeleteButton = ({ click, children }) => {
  return (
    <button
      onClick={click}
      className="hover:bg-red-600 hover:text-white text-red-600 border-2 border-red-600 px-6 py-1.5 rounded-xl text-lg font-medium cursor-pointer"
    >
      {children}
    </button>
  );
};
export default DeleteButton;
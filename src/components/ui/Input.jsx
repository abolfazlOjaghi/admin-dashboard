const Input = ({ children, searchValue, searchInputChange }) => {
  return (
    <div className="relative flex-1 min-w-55 max-w-80">
        {children}
      <input
        type="text"
        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gray-100 dark:bg-zinc-900 font-medium placeholder:text-gray-400 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-blue-600/40"
        placeholder="Search products..."
        value={searchValue}
        onChange={searchInputChange}
      />
    </div>
  );
};
export default Input
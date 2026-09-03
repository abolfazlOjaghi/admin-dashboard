const EmptyResult = ({ children, item }) => {
  return (
    <div className="min-h-72 flex flex-col items-center justify-center text-center">
      <div className="size-16 rounded-full bg-gray-200 dark:bg-zinc-800 flex items-center justify-center mb-4">
        <span className="text-2xl">{children}</span>
      </div>
      <h4 className="text-xl font-semibold">no {item}s found</h4>
      <p className="text-gray-500 dark:text-gray-400 mt-1">
        Try searching with different words
      </p>
    </div>
  );
};
export default EmptyResult;

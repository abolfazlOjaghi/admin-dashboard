import { clsx } from "clsx";
const PaginatingControls = ({
  pagesArray,
  goToPage,
  nextPage,
  prevPage,
  currentPage,
  prevDisabled,
  nextDisabled,
}) => {
  return (
    <div className="space-x-4 text-center">
      <button
        className="pagination-button"
        onClick={prevPage}
        disabled={prevDisabled}
      >
        Prev
      </button>
      {pagesArray.map((page, index) => {
        return (
          <button
            disabled={page === currentPage || page === "..."}
            onClick={() => goToPage(page)}
            key={index}
            className={clsx(
              " bg-blue-600 text-white px-5 py-2 font-medium rounded-xl border-3 border-blue-600",
              page === "..."
                ? "disabled:bg-gray-500 border-gray-500 dark:text-white text-gray-950 cursor-text"
                : "disabled:bg-zinc-900 dark:disabled:bg-white dark:disabled:text-gray-950 cursor-pointer",
            )}
          >
            {page}
          </button>
        );
      })}
      <button
        className="pagination-button"
        onClick={nextPage}
        disabled={nextDisabled}
      >
        Next
      </button>
    </div>
  );
};
export default PaginatingControls;

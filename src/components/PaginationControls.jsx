import { clsx } from "clsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
    <div className="flex flex-nowrap items-center justify-center gap-x-2 overflow-x-auto py-1 *:m-0!">
      <button
        className="flex items-center justify-center size-10 rounded-full bg-gray-100 dark:bg-zinc-900 hover:bg-gray-200 dark:hover:bg-zinc-800 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
        onClick={prevPage}
        disabled={prevDisabled}
      >
        <ChevronLeft size={20} />
      </button>

      {pagesArray.map((page, index) => {
        if (page === "...") {
          return (
            <span key={index} className="px-2 text-gray-400 select-none">
              ...
            </span>
          );
        }
        const isActive = page === currentPage;
        return (
          <button
            key={index}
            disabled={isActive}
            onClick={() => goToPage(page)}
            className={clsx(
              "size-10 rounded-full font-medium transition-colors cursor-pointer",
              isActive
                ? "bg-blue-600 text-white cursor-default"
                : "bg-gray-100 dark:bg-zinc-900 hover:bg-blue-600/10 hover:text-blue-600",
            )}
          >
            {page}
          </button>
        );
      })}

      <button
        className="flex items-center justify-center size-10 rounded-full bg-gray-100 dark:bg-zinc-900 hover:bg-gray-200 dark:hover:bg-zinc-800 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
        onClick={nextPage}
        disabled={nextDisabled}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};
export default PaginatingControls;

import { LayoutGrid, TableOfContents, Search, ChevronDown } from "lucide-react";
const TopBar = ({
  search,
  searchInputChange,
  productsView,
  productsViewToggle,
  categories = [],
  changeCategory,
  selectedCategory,
}) => {
  return (
    <div className="flex flex-wrap items-center gap-3 dark:bg-zinc-950 bg-gray-200 p-6 rounded-xl">
      <button
        className="flex items-center justify-center size-11 shrink-0 rounded-xl bg-gray-100 dark:bg-zinc-900 hover:bg-gray-200 dark:hover:bg-zinc-800 cursor-pointer transition-colors"
        onClick={productsViewToggle}
        aria-label="Toggle view"
      >
        {productsView === "grid" ? <LayoutGrid size={20} /> : <TableOfContents size={20} />}
      </button>

      <div className="relative flex-1 min-w-55 max-w-80">
        <Search
          size={18}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gray-100 dark:bg-zinc-900 font-medium placeholder:text-gray-400 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-blue-600/40"
          placeholder="Search products..."
          value={search}
          onChange={searchInputChange}
        />
      </div>

      <div className="relative">
        <select
          value={selectedCategory}
          className="appearance-none bg-gray-100 dark:bg-zinc-900 rounded-xl pl-4 pr-9 py-2.5 font-medium focus:outline-none focus:ring-2 focus:ring-blue-600/40 cursor-pointer"
          onChange={(e) => changeCategory(e.target.value)}
        >
          <option value="">All categories</option>
          {categories.map((category) => (
            <option
              className="font-medium text-gray-800 dark:text-gray-100"
              key={category.slug}
              value={category.slug}
            >
              {category.name}
            </option>
          ))}
        </select>
        <ChevronDown
          size={16}
          className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400"
        />
      </div>
    </div>
  );
};
export default TopBar;

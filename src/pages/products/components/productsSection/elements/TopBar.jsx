import { LayoutGrid, TableOfContents } from "lucide-react";
const TopBar = ({ search, searchInputChange, productsView, productsViewToggle, categories = [],  changeCategory, selectedCategory}) => {
  return (
    <div className="flex items-center gap-x-3 *:shadow-xl">
      <button
        className="bg-gray-500 p-1.5 rounded-lg cursor-pointer dark:hover:bg-zinc-950 hover:bg-white transition-all delay-50"
        onClick={productsViewToggle}
      >
        {productsView === "grid" ? <LayoutGrid /> : <TableOfContents />}
      </button>
      <input
        type="text"
        className="px-6 py-2 rounded-xl focus:outline-none dark:bg-zinc-950 bg-gray-100 w-80 font-semibold"
        placeholder="search products..."
        value={search}
        onChange={searchInputChange}
      />
      <div>
        <select value={selectedCategory} name="" id="" className="bg-gray-100 dark:bg-gray-950 rounded-xl px-4 py-2 focus:outline-none cursor-pointer" onChange={(e) => changeCategory(e.target.value)}>
          <option value="">All</option>
                  {
          categories.map(category => {
            return <option className="font-medium text-gray-800 dark:text-gray-100 " key={category.id} value={category.slug}>{category.name}</option>
          })
        }
        </select>
      </div>
    </div>
  );
};
export default TopBar;

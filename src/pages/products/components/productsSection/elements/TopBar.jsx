import { LayoutGrid, TableOfContents } from "lucide-react";
const TopBar = ({ search, searchInputChange, productsView, productsViewToggle }) => {
  return (
    <div className="flex items-center gap-x-3">
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
    </div>
  );
};
export default TopBar;

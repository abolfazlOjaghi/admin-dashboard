import {
  LayoutGrid,
  TableOfContents,
  Search,
  ChevronDown,
  Plus,
} from "lucide-react";
import Input from "../../../../../components/ui/Input";
import { useState } from "react";
import ModalContainer from "../../../../../features/ModalContainer";
import AddModal from "../../../../../components/modal/AddModal";
const TopBar = ({
  search,
  searchInputChange,
  productsView,
  productsViewToggle,
  categories = [],
  changeCategory,
  selectedCategory,
}) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  return (
    <div className="flex flex-wrap items-center xl:gap-3 gap-2 dark:bg-zinc-950 bg-gray-200 xl:p-6 py-6 px-3 rounded-xl">
      <div className="flex items-center max-sm:w-full max-sm:*:space-x-1.5 max-sm:*:flex-1 gap-x-2">
        <button
          className="product-topbar-button"
          onClick={() => setIsAddModalOpen((prev) => !prev)}
        >
          <Plus size={20} /><span className="sm:hidden">Add Product</span>
        </button>
        <button className="product-topbar-button" onClick={productsViewToggle}>
          <span className="sm:hidden">{productsView} view</span>{productsView === "grid" ? (
            <LayoutGrid size={20} />
          ) : (
            <TableOfContents size={20} />
          )}
        </button>
      </div>
      <Input
        value={search}
        onChange={searchInputChange}
        placeholder="Search products..."
        width="md:w-80 w-full"
      >
        <Search
          size={18}
          className="input-icon"
        />
      </Input>
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
      {isAddModalOpen && (
        <ModalContainer>
          <AddModal cancel={() => setIsAddModalOpen(false)} />
        </ModalContainer>
      )}
    </div>
  );
};
export default TopBar;

import { ChevronRight, Star } from "lucide-react";
import { Link } from "react-router";
import DeleteButton from "../ui/DeleteButton";
import { useDeleteItem } from "../../hooks/useDeleteItem";
import DeleteModal from "../modal/DeleteModal";
import ModalContainer from "../../features/ModalContainer";
const ProductRow = ({
  image,
  title,
  price,
  rating,
  infoRoot,
  id,
  dependencyArray,
}) => {
  const {
    deleteItem: deleteProduct,
    toggleModal,
    isModalOpen,
  } = useDeleteItem(dependencyArray, "products", "Product", id);

  return (
    <div className="group w-full flex items-center gap-6 bg-gray-100 dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-200 p-4">
      <div className="bg-white dark:bg-zinc-900 rounded-xl size-32 shrink-0 overflow-hidden">
        <img
          src={image}
          alt=""
          className="w-full h-full object-contain p-3 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex justify-between items-center w-full">
        <div className="space-y-1">
          <p className="font-semibold text-xl line-clamp-1">{title}</p>
          <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400 font-medium">
            <Star size={16} className="fill-amber-500 text-amber-500" />
            {rating}/5
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold text-blue-600">{price}$</span>
          <DeleteButton padding="px-6" click={toggleModal}>
            Delete Product
          </DeleteButton>
          <Link to={infoRoot}>
            <button className="flex items-center gap-x-2 bg-blue-600/80 dark:bg-blue-500/80 text-white hover:bg-blue-600 rounded-xl pl-5 pr-2 py-2 font-medium transition-all duration-200 cursor-pointer">
              Info
              <span className="bg-white/20 rounded-full p-1">
                <ChevronRight size={18} />
              </span>
            </button>
          </Link>
        </div>
      </div>

      {isModalOpen && (
        <ModalContainer cancel={toggleModal}>
          <DeleteModal handleDelete={deleteProduct} cancel={toggleModal} item="product"/>
        </ModalContainer>
      )}
    </div>
  );
};
export default ProductRow;

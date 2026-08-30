import { useNavigate } from "react-router";
import DeleteButton from "../ui/DeleteButton";
import { useDeleteItem } from "../../hooks/useDeleteItem";
import DeleteModal from "../modal/DeleteModal";
import { Star } from "lucide-react";
import ModalContainer from "../../features/ModalContainer";
const ProductCard = ({
  children,
  image,
  title,
  price,
  rating,
  infoRoot,
  id,
  dependencyArray,
}) => {
  const navigate = useNavigate();
  const {
    deleteItem: deleteProduct,
    toggleModal,
    isModalOpen,
  } = useDeleteItem(dependencyArray, "products", "Product", id);

  return (
    <div
      className="relative group rounded-2xl overflow-hidden bg-gray-100 dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer flex flex-col"
      onClick={() => navigate(infoRoot)}
    >
      {children}

      <div className="bg-white dark:bg-zinc-900 aspect-square overflow-hidden">
        <img
          src={image}
          alt=""
          className="w-full h-full object-contain p-6 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="px-4 pt-3 pb-4 flex flex-col gap-2 flex-1">
        <p className="font-semibold text-lg line-clamp-1">{title}</p>

        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold text-blue-600">{price}$</p>
          <span className="flex items-center gap-1 bg-amber-100 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 text-sm font-medium px-2 py-1 rounded-lg">
            <Star size={14} className="fill-amber-500 text-amber-500" />
            {rating}
          </span>
        </div>

        <div className="flex gap-2 items-center mt-2 *:w-full">
          <button className="bg-blue-600 text-white border-2 border-blue-600 px-4 py-1.5 rounded-xl text-base font-medium cursor-pointer hover:bg-blue-700 transition-colors">
            Info
          </button>
          <DeleteButton click={toggleModal}>Delete Product</DeleteButton>
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
export default ProductCard;

import { useNavigate } from "react-router";
import DeleteButton from "../ui/DeleteButton";
import { useDeleteItem } from "../../hooks/useDeleteItem";
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
  const deleteProduct = useDeleteItem(dependencyArray, "products", "Product");
  return (
    <div
      className="rounded-xl overflow-hidden bg-gray-100 dark:bg-zinc-950 pb-4 relative cursor-pointer"
      onClick={() => navigate(infoRoot)}
    >
      {children}
      <img src={image} alt="" className="" />
      <div className="px-3 py-2 overflow-hidden">
        <p className="font-medium text-xl">{title}</p>
        <p className="text-3xl font-semibold">{price}$</p>
        <p className="font-medium text-lg">rate : {rating}/5</p>
      </div>
      <div className="px-6 py-2 flex gap-x-2 items-center *:w-full">
        <button className=" bg-blue-600  text-white border-2 border-blue-600 px-6 py-1.5 rounded-xl text-lg font-medium cursor-pointer hover:bg-blue-800 transition-all duration-75">
          Info
        </button>
        <DeleteButton click={() => deleteProduct(id)}>
          Delete Product
        </DeleteButton>
      </div>
    </div>
  );
};
export default ProductCard;

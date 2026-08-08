import { Children } from "react";
import { Link, useNavigate } from "react-router";
const ProductCard = ({ children, image, title, price, rating, infoRoot }) => {
  const navigate = useNavigate()
  return (
    <div className="rounded-xl overflow-hidden bg-gray-100 dark:bg-zinc-950 pb-4 relative cursor-pointer" onClick={() => navigate(infoRoot)}>
      {children}
                  <img
        src={image}
        alt=""
        className=""
      />
      <div className="px-3 py-2 overflow-hidden">
        <p className="font-medium text-xl">{title}</p>
          <p className="text-3xl font-semibold">{price}$</p>
          <p className="font-medium text-lg">rate : {rating}/5</p>
      </div>
      <div className="px-6 py-2">
        <button className="bg-blue-600 w-full py-1.5 rounded-xl hover:bg-blue-700 text-white cursor-pointer" >Info</button>
      </div>
    </div>
  );
};
export default ProductCard;

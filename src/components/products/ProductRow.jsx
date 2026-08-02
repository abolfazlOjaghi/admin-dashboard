import { ChevronRight } from "lucide-react"
const ProductRow = ({ children, image, title, price, rating }) => {
  return (
    <div className="w-full flex items-center bg-gray-100 dark:bg-zinc-950 rounded-xl gap-x-4 pr-32">
      <img src={image}  className="size-52"/>
        <div className="flex justify-between w-full items-center">
            <div><p className="font-medium text-xl">{title}</p><span className="font-medium text-lg">rating : {rating}/5</span></div>
            <div className="flex items-center gap-x-4">
              <span className="text-3xl font-semibold">{price}$</span>
              <button className="flex items-center flex-row-reverse hover:bg-blue-600 text-white rounded-xl pl-6 py-1 group transition-all"><div className="border-blue-600 border-2 rounded-xl p-1 peer text-black dark:text-white group-hover:text-white"><ChevronRight size={28}/></div><span className="transition-all text-lg font-medium peer-hover:text-white group-hover:text-white  text-gray-100 dark:text-zinc-950">Info</span></button>
            </div>
        </div>
    </div>
  );
};
export default ProductRow;

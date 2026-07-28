const ProductRow = ({ children, image, title, price, rating }) => {
  return (
    <div className="w-full flex items-center bg-gray-100 dark:bg-zinc-950 rounded-xl gap-x-4 pr-32">
      <img src={image}  className="size-52"/>
        <div className="flex justify-between w-full items-center">
            <div><p className="font-medium text-xl">{title}</p><span className="font-medium text-lg">rating : {rating}/5</span></div>
            <span className="text-3xl font-semibold">{price}$</span>
        </div>
    </div>
  );
};
export default ProductRow;

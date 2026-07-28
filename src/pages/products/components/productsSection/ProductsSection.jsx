import TopBar from "./elements/TopBar";
import ProductCard from "../../../../components/products/ProductCard";
import ProductRow from "../../../../components/products/ProductRow";
import clsx from "clsx";
const ProductsSection = ({ children, products, productsView }) => {
  return (
    <section className="dark:bg-zinc-900 bg-gray-50 rounded-xl py-4 px-8 space-y-16">
      {children}
      <div className={clsx("gap-8", productsView === "grid" ? "grid grid-cols-5" : "flex flex-col")}>
        {products?.products.map((product) => {
          const productProps = {
            key: product.id,
            image: product.images[0],
            title: product.title,
            price: product.price,
            rating: product.rating,
            productsView
          };
          return  productsView === "grid" ? <ProductCard {...productProps}/> : <ProductRow {...productProps}/>;
        })}
      </div>
    </section>
  );
};
export default ProductsSection;

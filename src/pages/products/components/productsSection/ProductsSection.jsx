import ProductCard from "../../../../components/products/ProductCard";
import ProductRow from "../../../../components/products/ProductRow";
import clsx from "clsx";
import ProductCardSkeleton from "../../../../components/products/skeleton/ProductCardSkeleton";
import ProductRowSkeleton from "../../../../components/products/skeleton/ProductRowSkeleton";
const ProductsSection = ({
  children,
  products,
  productsView,
  dependencyArray,
}) => {
  return (
    <section className="dark:bg-zinc-900 bg-gray-50 rounded-xl py-8 px-8 space-y-16">
      {children}
      <div
        className={clsx(
          "gap-8",
          productsView === "grid"
            ? "grid grid-cols-4"
            : "flex flex-col items-center",
        )}
      >
        {products
          ? products.products.map((product) => {
              const productProps = {
                key: product.id,
                id: product.id,
                image: product.images[0],
                title: product.title,
                price: product.price,
                rating: product.rating,
                productsView,
                infoRoot: `/products/${product.id}`,
                dependencyArray,
              };
              return productsView === "grid" ? (
                <ProductCard {...productProps} />
              ) : (
                <ProductRow {...productProps} />
              );
            })
          : Array.from({ length: 10 }).map((_, i) => {
              return productsView === "grid" ? (
                <ProductCardSkeleton key={i} />
              ) : (
                <ProductRowSkeleton key={i} />
              );
            })}
      </div>
    </section>
  );
};
export default ProductsSection;

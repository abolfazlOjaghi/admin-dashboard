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

      {products ? (
        products.products.length > 0 ? (
          <div
            className={clsx(
              "gap-8",
              productsView === "grid"
                ? "grid grid-cols-4"
                : "flex flex-col items-center",
            )}
          >
            {products.products.map((product) => {
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
            })}
          </div>
        ) : (
          <div className="min-h-72 flex flex-col items-center justify-center text-center">
            <div className="size-16 rounded-full bg-gray-200 dark:bg-zinc-800 flex items-center justify-center mb-4">
              <span className="text-2xl">📦</span>
            </div>

            <h4 className="text-xl font-semibold">No products found</h4>

            <p className="text-gray-500 dark:text-gray-400 mt-1">
              Try changing your search or category.
            </p>
          </div>
        )
      ) : (
        <div
          className={clsx(
            "gap-8",
            productsView === "grid"
              ? "grid grid-cols-4"
              : "flex flex-col items-center",
          )}
        >
          {Array.from({ length: 10 }).map((_, i) =>
            productsView === "grid" ? (
              <ProductCardSkeleton key={i} />
            ) : (
              <ProductRowSkeleton key={i} />
            ),
          )}
        </div>
      )}
    </section>
  );
};
export default ProductsSection;

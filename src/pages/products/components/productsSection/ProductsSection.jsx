import ProductCard from "../../../../components/products/ProductCard";
import ProductRow from "../../../../components/products/ProductRow";
import clsx from "clsx";
import ProductCardSkeleton from "../../../../components/products/skeleton/ProductCardSkeleton";
import ProductRowSkeleton from "../../../../components/products/skeleton/ProductRowSkeleton";
import EmptyResult from "../../../../components/EmptyResult";
import { SquareChartGantt } from "lucide-react";
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
          <EmptyResult item="product">
            <SquareChartGantt size={32} />
          </EmptyResult>
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

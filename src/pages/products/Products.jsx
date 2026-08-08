import { TableOfContents, LayoutGrid } from "lucide-react";
import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { getProducts } from "../../services/requests/products";
import ProductsSection from "./components/productsSection/ProductsSection";
import TopBar from "./components/productsSection/elements/TopBar";
import ProductRowSkeleton from "../../components/products/skeleton/ProductRowSkeleton";
import ProductCardSkeleton from "../../components/products/skeleton/ProductCardSkeleton";
import { useLocalStorage } from "../../hooks/useLocalStorage";
const Products = () => {
  const [productsView, setProductsView] = useLocalStorage("productsView", "grid");
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 700);
    return () => clearTimeout(timer);
  }, [search]);
  const {
    data: products,
    isLoading,
    isError,
  } = useFetch(
    () => getProducts(debouncedSearch),
    ["products", debouncedSearch],
  );
  return (
    <div className="page">
      <section className="">
        <h3>Products</h3>
          <ProductsSection products={products} productsView={productsView} isLoading={isLoading}>
            <TopBar
              search={search}
              searchInputChange={(e) => setSearch(e.target.value)}
              productsView={productsView}
              productsViewToggle={() =>
                setProductsView((prev) => (prev === "grid" ? "table" : "grid"))
              }
            />
          </ProductsSection>
      </section>
    </div>
  );
};
export default Products;

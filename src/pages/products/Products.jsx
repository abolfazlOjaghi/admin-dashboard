import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { getCategories, getProducts } from "../../services/requests/products";
import ProductsSection from "./components/productsSection/ProductsSection";
import TopBar from "./components/productsSection/elements/TopBar";
import { useLocalStorage } from "../../hooks/useLocalStorage";
const Products = () => {
  const [productsView, setProductsView] = useLocalStorage(
    "productsView",
    "grid",
  );
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 700);
    return () => clearTimeout(timer);
  }, [search]);
  const { data: products } = useFetch(
    () => getProducts(debouncedSearch, selectedCategory),
    ["products", debouncedSearch, selectedCategory],
  );
  const { data: categories } = useFetch(getCategories, ["categories"]);
  return (
    <div className="page">
      <section>
        <h3>Products</h3>
        <ProductsSection
          products={products}
          productsView={productsView}
          dependencyArray={["products", debouncedSearch, selectedCategory]}
        >
          <TopBar
            search={search}
            searchInputChange={(e) => setSearch(e.target.value)}
            productsView={productsView}
            productsViewToggle={() =>
              setProductsView((prev) => (prev === "grid" ? "table" : "grid"))
            }
            categories={categories}
            selectedCategory={selectedCategory}
            changeCategory={setSelectedCategory}
          />
        </ProductsSection>
      </section>
    </div>
  );
};
export default Products;

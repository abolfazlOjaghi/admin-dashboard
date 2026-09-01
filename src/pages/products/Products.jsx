import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { getCategories, getProducts } from "../../services/requests/products";
import ProductsSection from "./components/productsSection/ProductsSection";
import TopBar from "./components/productsSection/elements/TopBar";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { usePagination } from "../../hooks/usePagination";
import PaginatingControls from "../../components/PaginationControls";
import { PRODUCTS_LIMIT } from "../../data/constans";
import ErrorState from "../../components/ErrorState";
const Products = () => {
  const [productsView, setProductsView] = useLocalStorage(
    "productsView",
    "grid",
  );
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [productsTotal, setProductsTotal] = useState("");
  const {
    page: currentPage,
    pages,
    nextPage,
    prevPage,
    goToPage,
  } = usePagination(productsTotal, PRODUCTS_LIMIT);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 700);
    return () => clearTimeout(timer);
  }, [search]);
  const {
    data: products,
    isError,
    refetch,
  } = useFetch(
    () =>
      getProducts(
        search || selectedCategory
          ? {
              search: debouncedSearch,
              category: selectedCategory,
            }
          : {
              page: currentPage,
              limit: 30,
            },
      ),
    ["products", debouncedSearch, selectedCategory, currentPage],
  );
  useEffect(() => {
    products && setProductsTotal(products.total);
  }, [products]);
  const { data: categories } = useFetch(getCategories, ["categories"]);
  if (isError) {
    return <ErrorState onRetry={refetch} />;
  }
  return (
    <div className="page space-y-6">
      <section>
        <h3>Products</h3>
        <ProductsSection
          products={products}
          productsView={productsView}
          dependencyArray={[
            "products",
            debouncedSearch,
            selectedCategory,
            currentPage,
          ]}
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
      {!search && !selectedCategory && (
        <PaginatingControls
          pagesArray={pages}
          goToPage={goToPage}
          nextPage={nextPage}
          prevPage={prevPage}
          currentPage={currentPage}
          prevDisabled={products?.skip === 0}
          nextDisabled={products?.skip + products?.limit >= products?.total}
        />
      )}
    </div>
  );
};
export default Products;

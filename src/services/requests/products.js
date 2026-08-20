import apiRequests from "../config/axios";
export const getProducts = async (search = "", category = "") => {
  const url = search
    ? `/products/search?q=${encodeURIComponent(search)}&limit=0`
    : "/products?limit=0";
  const { data } = await apiRequests.get(url);
  if (category) {
    data.products = data.products.filter(
      product => product.category === category,
    );
  }
  return data;
};
export const getSingleProduct = async (productId) => {
  const { data } = await apiRequests.get(`/products/${productId}`);
  return data;
};
export const getCategories = async () => {
    const { data } = await apiRequests.get("/products/categories")
    return data
} 
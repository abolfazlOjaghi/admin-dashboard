import apiRequests from "../config/axios";
export const getProducts = async (obj = {
  search : "",
  category : "",
  page : "",
  limit : ""
}) => {
  const skip = (obj.page - 1) * obj.limit
  const url = (!obj.page && !obj.limit) ? (obj.search ? `/products/search?q=${encodeURIComponent(obj.search)}&limit=0` : "/products?limit=0") : `/products?limit=${obj.limit}&skip=${skip}`
  const { data } = await apiRequests.get(url);
  if (obj.category) {
    data.products = data.products.filter(
      product => product.category === obj.category,
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
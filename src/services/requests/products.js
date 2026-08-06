import apiRequests from "../config/axios"
export const getProducts = async (search = null) => {
    const url = search ? `/products/search?q=${search}` : "/products?limit=0"
    const { data } = await apiRequests.get(url)
    return data
}
export const getSingleProduct = async (productId) => {
    const { data } = await apiRequests.get(`/products/${productId}`)
    return data
}
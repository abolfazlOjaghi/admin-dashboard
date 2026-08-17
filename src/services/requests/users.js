import apiRequests from "../config/axios"

export const getUsers = async (search = "") => {
    const url = search ?  `/users/search?q=${search}` : "/users?limit=0"
    const { data } = await apiRequests(url)
    return data  
}
export const getUserById = async (userId) => {
    const { data } = await apiRequests(`/users/${userId}`)
    return data
}
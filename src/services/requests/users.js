import apiRequests from "../config/axios"

export const getUsers = async () => {
    const { data } = await apiRequests("/users?limit=0")
    return data  
}
export const getUserById = async (userId) => {
    const { data } = await apiRequests(`/users/${userId}`)
    return data
}
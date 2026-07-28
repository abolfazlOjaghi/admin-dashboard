import apiRequests from "../config/axios"

export const getUsers = async () => {
    const { data } = await apiRequests("/users?limit=0")
    return data  
}
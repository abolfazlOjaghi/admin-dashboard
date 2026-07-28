import apiRequests from "../config/axios"

export const getComments = async () => {
    const { data } = await apiRequests("/comments?limit=0")
    return data
}
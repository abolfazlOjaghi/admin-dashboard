import axios from "axios";
const apiRequests = axios.create({
    baseURL : "https://dummyjson.com"
})
export default apiRequests
import apiRequests from "../config/axios";

export const getUsers = async (
  obj = {
    search: "",
    page: "",
    limit: "",
  },
) => {
  const skip = (obj.page - 1) * obj.limit;
  const url =
    !obj.search && !obj.page && !obj.limit
      ? "/users?limit=0"
      : !obj.search
        ? `/users?limit=${obj.limit}&skip=${skip}`
        : `/users/search?q=${encodeURIComponent(obj.search)}&limit=0`;
  const { data } = await apiRequests(url);
  return data;
};
export const getUserById = async (userId) => {
  const { data } = await apiRequests(`/users/${userId}`);
  return data;
};
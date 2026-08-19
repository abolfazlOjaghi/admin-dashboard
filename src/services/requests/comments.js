import apiRequests from "../config/axios";

export const getComments = async (obj = {
  page : "",
  limit : ""
}) => {
  const skip = (obj.page - 1) * obj.limit;
  const url = (!obj.limit && !obj.page) ? "/comments?limit=0" : `/comments?limit=${obj.limit}&skip=${skip}`
  const { data } = await apiRequests(url);
  return data;
};

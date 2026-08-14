import apiRequests from "../config/axios";

export const getAllComments = async () => {
  const { data } = await apiRequests("/comments?limit=0");
  return data;
};
export const getPaginationComments = async (page = 1, limit = 30) => {
  const skip = (page - 1) * limit;
  const { data } = await apiRequests(`/comments?limit=${limit}&skip=${skip}`);
  return data;
};

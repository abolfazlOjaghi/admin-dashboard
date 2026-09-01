import { useQuery } from "@tanstack/react-query";

export const useFetch = (func, keys = []) => {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: keys,
    queryFn: func,
    retry: 3,
  });
  return { data, isLoading, isError, error, refetch };
};

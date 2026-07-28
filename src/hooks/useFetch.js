import { useQuery } from "@tanstack/react-query"

export const useFetch = (func, keys = []) => {
    const { data, isLoading, isError } = useQuery({
        queryKey : keys,
        queryFn : func,
        retry : 5
    })
    return { data, isLoading, isError }
}

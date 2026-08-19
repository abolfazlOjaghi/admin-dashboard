import { useSearchParams } from "react-router";
import { getPaginationPages } from "../utils/getPaginationPages";
import { useEffect } from "react";
export const usePagination = (total, limit = 30) => {
  const [params, setParams] = useSearchParams();
  const page = Number(params.get("page")) || 1;
  const totalPages = Math.ceil(total / limit);
  const pages = getPaginationPages(page, totalPages);
  const nextPage = () => {
    page < totalPages && setParams({ page: page + 1 });
  };
  const prevPage = () => {
    page > 1 && setParams({ page: page - 1 });
  };
  const goToPage = (page) => {
    page <= totalPages && setParams({ page });
  };
  const goFirstPage = () => {
    setParams({ page: 1 });
  }
    useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);
  return { pages, nextPage, prevPage, page, totalPages, goToPage, goFirstPage };
};

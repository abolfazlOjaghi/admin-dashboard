import { useFetch } from "../hooks/useFetch";
import { getComments } from "../services/requests/comments";
import Comment from "../components/comment/Comment";
import { useState, useEffect } from "react";
import { COMMENTS_LIMIT } from "../data/constans";
import CommentSkeleton from "../components/comment/skeleton/CommentSkeleton";
import { usePagination } from "../hooks/usePagination";
import PaginatingControls from "../components/PaginationControls";
import ErrorState from "../components/ErrorState";
import Input from "../components/ui/Input";
import { Search } from "lucide-react";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import { MessageSquare } from "lucide-react";
import EmptyResult from "../components/EmptyResult";
const Comments = () => {
  const [totalComments, setTotalComments] = useState(0);
  const { register, watch } = useForm({
    defaultValues: { searchField: "commentText", searchText: "" },
  });
  const searchField = watch("searchField");
  const searchText = watch("searchText").trim();
  const isSearching = searchText.length > 0;
  const {
    page: currentPage,
    pages,
    nextPage,
    prevPage,
    goToPage,
  } = usePagination(totalComments, COMMENTS_LIMIT);

  const {
    data: comments,
    isLoading,
    isError,
    refetch,
  } = useFetch(
    () =>
      isSearching
        ? getComments({})
        : getComments({ page: currentPage, limit: COMMENTS_LIMIT }),
    ["comments", isSearching ? "all" : currentPage, COMMENTS_LIMIT],
  );

  useEffect(() => {
    comments?.total && setTotalComments(comments?.total);
  }, [comments]);

  if (isError) {
    return <ErrorState onRetry={refetch} />;
  }

  const visibleComments = isSearching
    ? comments?.comments.filter((comment) => {
        const value =
          searchField === "user" ? comment.user.username : comment.body;
        return value.toLowerCase().includes(searchText.toLowerCase());
      })
    : comments?.comments;

  return (
    <div className="page">
      <section>
        <h3>Comments</h3>
        <div className="dark:bg-zinc-950 bg-gray-50 p-4 rounded-xl flex flex-wrap items-center gap-4">
          <Input
            placeholder="search for comments..."
            width="w-80"
            {...register("searchText")}
          >
            <Search
              size={18}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </Input>

          <div className="flex items-center gap-x-3">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Search in
            </span>
            <div className="flex gap-x-1 bg-gray-100 dark:bg-zinc-900 rounded-full p-1">
              <label
                className={clsx(
                  "px-3.5 py-1.5 rounded-full text-sm font-medium cursor-pointer transition-colors",
                  searchField === "user"
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-zinc-800",
                )}
              >
                <input
                  type="radio"
                  value="user"
                  className="sr-only"
                  {...register("searchField")}
                />
                User
              </label>
              <label
                className={clsx(
                  "px-3.5 py-1.5 rounded-full text-sm font-medium cursor-pointer transition-colors",
                  searchField === "commentText"
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-zinc-800",
                )}
              >
                <input
                  type="radio"
                  value="commentText"
                  className="sr-only"
                  {...register("searchField")}
                />
                Comment text
              </label>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {isLoading
            ? Array.from({ length: 10 }, (_, index) => index + 1).map(
                (item) => <CommentSkeleton key={item} />,
              )
            : visibleComments?.map((comment) => (
                <Comment
                  key={comment.id}
                  id={comment.id}
                  body={comment.body}
                  likes={comment.likes}
                  fullName={comment.user.fullName}
                  username={comment.user.username}
                  dependencyArray={[
                    "comments",
                    isSearching ? "all" : currentPage,
                    COMMENTS_LIMIT,
                  ]}
                />
              ))}
          {isSearching && visibleComments?.length === 0 && (
            <EmptyResult item="comment">
              <MessageSquare size={32} />
            </EmptyResult>
          )}
        </div>

        {!isSearching && (
          <PaginatingControls
            pagesArray={pages}
            goToPage={goToPage}
            nextPage={nextPage}
            prevPage={prevPage}
            currentPage={currentPage}
            prevDisabled={comments?.skip === 0}
            nextDisabled={comments?.skip + comments?.limit >= comments?.total}
          />
        )}
      </section>
    </div>
  );
};
export default Comments;

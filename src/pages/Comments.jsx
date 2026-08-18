import { useFetch } from "../hooks/useFetch";
import { getPaginationComments } from "../services/requests/comments";
import Comment from "../components/comment/Comment";
import { useState, useEffect } from "react";
import { COMMENTS_LIMIT } from "../data/constans";
import clsx from "clsx";
import CommentSkeleton from "../components/comment/skeleton/CommentSkeleton";
import { usePagination } from "../hooks/usePagination";
const Comments = () => {
  const [totalComments, setTotalComments] = useState(0);
  const {
    page: currentPage,
    pages,
    nextPage,
    prevPage,
    goToPage,
  } = usePagination(totalComments, COMMENTS_LIMIT);
  const { data: comments, isLoading } = useFetch(
    () => getPaginationComments(currentPage, COMMENTS_LIMIT),
    ["comments", currentPage, COMMENTS_LIMIT],
  );
  useEffect(() => {
    comments?.total && setTotalComments(comments?.total);
  }, [comments]);
  return (
    <div className="page">
      <section>
        <h3>Comments</h3>
        <div className="space-y-4">
          {isLoading
            ? Array.from({ length: 10 }).map(() => {
                return <CommentSkeleton />;
              })
            : comments?.comments.map((comment) => {
                return (
                  <Comment
                    key={comment.id}
                    body={comment.body}
                    likes={comment.likes}
                    fullName={comment.user.fullName}
                    username={comment.user.username}
                  />
                );
              })}
        </div>
        <div className="space-x-4 text-center">
          <button
            className="pagination-button"
            onClick={prevPage}
            disabled={comments?.skip === 0}
          >
            Prev
          </button>
          {pages.map((page, index) => {
            return (
              <button
                disabled={page === currentPage || page === "..."}
                onClick={() => goToPage(page)}
                key={index}
                className={clsx(
                  " bg-blue-600 text-white px-5 py-2 font-medium rounded-xl border-3 border-blue-600",
                  page === "..."
                    ? "disabled:bg-gray-500 border-gray-500 dark:text-white text-gray-950 cursor-text"
                    : "disabled:bg-zinc-900 dark:disabled:bg-white dark:disabled:text-gray-950 cursor-pointer",
                )}
              >
                {page}
              </button>
            );
          })}
          <button
            className="pagination-button"
            onClick={nextPage}
            disabled={comments?.skip + comments?.limit >= comments?.total}
          >
            Next
          </button>
        </div>
      </section>
    </div>
  );
};
export default Comments;

import { useFetch } from "../hooks/useFetch";
import { getPaginationComments } from "../services/requests/comments";
import Comment from "../components/Comment";
import { useState } from "react";
import { COMMENTS_LIMIT } from "../data/constans";
import { getPaginationPages } from "../utils/getPaginationPages";
import { useSearchParams } from "react-router";
import clsx from "clsx";
const Comments = () => {
  //   const [pagination, setPagination] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const pagination = Number(searchParams.get("page")) || 1;
  const { data: comments } = useFetch(
    () => getPaginationComments(pagination, COMMENTS_LIMIT),
    ["comments", pagination, COMMENTS_LIMIT],
  );
  const lastPage = Math.ceil(comments?.total / COMMENTS_LIMIT);
  const pages = getPaginationPages(pagination, lastPage);
  return (
    <div className="page">
      <section>
        <h3>Comments</h3>
        <div className="space-y-4">
          {comments?.comments.map((comment) => {
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
            onClick={() => setSearchParams({ page: pagination - 1 })}
            disabled={comments?.skip === 0}
          >
            Prev
          </button>
          {pages.map((page, index) => {
            return (
              <button
                disabled={page === pagination || page === "..."}
                onClick={() => setSearchParams({ page: page })}
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
            onClick={() => setSearchParams({ page: pagination + 1 })}
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

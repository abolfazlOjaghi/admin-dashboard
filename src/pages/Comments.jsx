import { useFetch } from "../hooks/useFetch";
import { getComments } from "../services/requests/comments";
import Comment from "../components/comment/Comment";
import { useState, useEffect } from "react";
import { COMMENTS_LIMIT } from "../data/constans";
import CommentSkeleton from "../components/comment/skeleton/CommentSkeleton";
import { usePagination } from "../hooks/usePagination";
import PaginatingControls from "../components/PaginationControls";
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
    () =>
      getComments({
        page: currentPage,
        limit: COMMENTS_LIMIT,
      }),
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
            ? Array.from({ length: 10 }, (_, index) => index + 1).map(
                (item) => {
                  return <CommentSkeleton key={item} />;
                },
              )
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
        <PaginatingControls
          pagesArray={pages}
          goToPage={goToPage}
          nextPage={nextPage}
          prevPage={prevPage}
          currentPage={currentPage}
          prevDisabled={comments?.skip === 0}
          nextDisabled={comments?.skip + comments?.limit >= comments?.total}
        />
      </section>
    </div>
  );
};
export default Comments;

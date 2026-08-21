import { CircleUserRound, ThumbsUp, Star } from "lucide-react";
import DeleteButton from "../ui/DeleteButton";
import { useDeleteItem } from "../../hooks/useDeleteItem";
const Comment = ({
  body,
  likes = "",
  fullName,
  username = "",
  email = "",
  rating = "",
  id,
  dependencyArray,
}) => {
  const deleteComment = useDeleteItem(dependencyArray, "comments", "Comment");
  return (
    <div className="rounded-xl pl-4 pr-12 py-2 dark:bg-zinc-900 bg-gray-50 space-y-4 flex justify-between items-center">
      <div>
        <div className="flex items-center gap-x-2">
          <CircleUserRound size={40} />
          <div>
            <p className="font-medium text-lg">{fullName}</p>
            <span className="text-gray-500 font-semibold">
              {username ? `@${username}` : email}
            </span>
          </div>
        </div>
        <div className="space-y-1.5">
          <p className="text-lg font-medium">{body}</p>
          <div className="flex items-center gap-x-1">
            {likes !== "" ? (
              <>
                <ThumbsUp fill="#155dfc" color="#ccc" />
                {likes}
              </>
            ) : (
              <>
                <Star color="#d08700" fill="#d08700" />
                {rating}
              </>
            )}
          </div>
        </div>
      </div>
      <DeleteButton click={() => deleteComment(id)}>
        Delete Comment
      </DeleteButton>
    </div>
  );
};
export default Comment;

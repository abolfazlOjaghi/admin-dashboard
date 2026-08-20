import { CircleUserRound, ThumbsUp, Star } from "lucide-react";
import DeleteButton from "../ui/DeleteButton";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
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
  const queryClient = useQueryClient();
  const handleDeleteComment = (commentId) => {
    queryClient.setQueryData(dependencyArray, (oldData) => {
      if (!oldData) return oldData;

      return {
        ...oldData,
        comments: oldData.comments.filter(
          (comment) => comment.id !== commentId,
        ),
      };
    });
    toast.success(
      <div>
        <p className="font-medium">Comment removed</p>
        <p className="text-xs text-gray-500">
          Demo only — changes are not persisted!
        </p>
      </div>,
    );
  };
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
      <DeleteButton click={() => handleDeleteComment(id)}>
        Delete Comment
      </DeleteButton>
    </div>
  );
};
export default Comment;

import { CircleUserRound, ThumbsUp, Star } from "lucide-react";
import DeleteButton from "../ui/DeleteButton";
import { useDeleteItem } from "../../hooks/useDeleteItem";
import DeleteModal from "../DeleteModal";
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
  const {
    deleteItem: deleteComment,
    toggleModal,
    isModalOpen,
  } = useDeleteItem(dependencyArray, "comments", "Comment", id);

  return (
    <div className="rounded-xl px-5 py-4 dark:bg-zinc-900 bg-gray-50 border border-transparent dark:border-zinc-800 space-y-3">
      <div className="flex items-start justify-between gap-x-4">
        <div className="flex items-center gap-x-3">
          <div className="bg-blue-600/10 text-blue-600 rounded-full p-1.5">
            <CircleUserRound size={28} />
          </div>
          <div>
            <p className="font-medium">{fullName}</p>
            <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">
              {username ? `@${username}` : email}
            </span>
          </div>
        </div>
        <DeleteButton padding="px-4" click={toggleModal}>
          Delete
        </DeleteButton>
      </div>

      <p className="font-medium leading-relaxed">{body}</p>

      <div className="flex items-center gap-x-1.5 text-sm font-semibold">
        {likes !== "" ? (
          <>
            <ThumbsUp size={16} fill="#155dfc" color="#155dfc" />
            <span>{likes}</span>
          </>
        ) : (
          <>
            <Star size={16} color="#d08700" fill="#d08700" />
            <span>{rating}</span>
          </>
        )}
      </div>

      {isModalOpen && (
        <DeleteModal
          item="comment"
          handleDelete={deleteComment}
          cancel={toggleModal}
        />
      )}
    </div>
  );
};
export default Comment;

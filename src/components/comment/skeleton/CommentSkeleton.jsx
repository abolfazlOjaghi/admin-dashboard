import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CommentSkeleton = () => {
  return (
    <div className="rounded-xl px-4 py-2 dark:bg-zinc-900 bg-gray-50 space-y-4">
      <div className="flex items-center gap-x-2">
        <Skeleton circle width={40} height={40} />

        <div>
          <Skeleton width={130} height={20} />
          <Skeleton width={90} height={16} />
        </div>
      </div>

      <div className="space-y-1.5">
        <Skeleton width="80%" height={22} />
        <div className="flex items-center gap-x-1">
          <Skeleton width={20} height={20} />
          <Skeleton width={30} height={18} />
        </div>
      </div>
    </div>
  );
};

export default CommentSkeleton;
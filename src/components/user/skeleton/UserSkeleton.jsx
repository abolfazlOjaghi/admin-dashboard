import Skeleton from "react-loading-skeleton";
const UserSkeleton = () => {
  return (
    <div className="bg-gray-100 dark:bg-zinc-900 rounded-xl px-4 xl:px-10 py-4">
      <div className="flex justify-between items-center max-xl:items-start max-xl:flex-col gap-4">
        <div className="flex gap-x-3 items-center">
          <Skeleton circle width={80} height={80} />

          <div>
            <Skeleton width={130} height={22} />
            <Skeleton width={100} height={18} />
          </div>
        </div>

        <div className="flex gap-x-2 max-sm:hidden">
          <Skeleton width={150} height={42} borderRadius={12} />
          <Skeleton width={150} height={42} borderRadius={12} />
        </div>
        <div className="sm:hidden space-y-2 flex flex-col items-center justify-center w-full">
          <Skeleton width={300} height={35} borderRadius={12} />
          <Skeleton width={300} height={35} borderRadius={12} />
        </div>
      </div>
    </div>
  );
};
export default UserSkeleton;

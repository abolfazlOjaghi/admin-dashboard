import Skeleton from "react-loading-skeleton";
const UserSkeleton = () => {
    return (
        <div className="bg-gray-100 dark:bg-zinc-900 rounded-xl px-12 py-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-x-3 items-center">
          <Skeleton circle width={80} height={80} />

          <div>
            <Skeleton width={130} height={22} />
            <Skeleton width={100} height={18} />
          </div>
        </div>

        <Skeleton
          width={150}
          height={42}
          borderRadius={12}
        />
      </div>
    </div>
    )
}
export default UserSkeleton;
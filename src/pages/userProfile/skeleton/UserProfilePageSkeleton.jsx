import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const UserProfilePageSkeleton = () => {
  return (
    <section className="bg-gray-100 dark:bg-zinc-950 rounded-2xl overflow-hidden">
      <div className="h-32 bg-linear-to-r from-blue-600/40 to-indigo-600/40 relative">
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
          <Skeleton circle width={96} height={96} className="border-4 border-gray-100 dark:border-zinc-950" />
        </div>
      </div>

      <div className="pt-16 pb-10 px-6 md:px-16 space-y-8">
        <div className="flex flex-col items-center gap-y-2">
          <Skeleton width={160} height={22} />
          <Skeleton width={100} height={16} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 space-y-4">
            <Skeleton width={180} height={20} />
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="space-y-1.5">
                <Skeleton width={70} height={12} />
                <Skeleton height={36} borderRadius={10} />
              </div>
            ))}
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 space-y-4">
            <Skeleton width={100} height={20} />
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="space-y-1.5">
                <Skeleton width={70} height={12} />
                <Skeleton height={36} borderRadius={10} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <Skeleton width={160} height={44} borderRadius={9999} />
        </div>
      </div>
    </section>
  );
}

export default UserProfilePageSkeleton;
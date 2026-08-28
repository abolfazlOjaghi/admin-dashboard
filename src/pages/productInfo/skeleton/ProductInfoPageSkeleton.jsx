import Skeleton from "react-loading-skeleton";
const ProductInfoPageSkeleton = () => {
  return (
    <div className="space-y-6">
      <section className="dark:bg-zinc-950 bg-gray-100 rounded-2xl p-6 md:p-10">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shrink-0 size-52 md:size-64 flex items-center justify-center mx-auto md:mx-0">
            <Skeleton width="100%" height="100%" borderRadius={16} />
          </div>

          <div className="flex-1 space-y-4 w-full">
            <div className="flex flex-wrap gap-2">
              <Skeleton width={80} height={24} borderRadius={9999} />
              <Skeleton width={60} height={24} borderRadius={9999} />
            </div>

            <Skeleton width="60%" height={30} />

            <div className="flex items-center gap-x-2">
              <Skeleton width={90} height={16} />
              <Skeleton width={70} height={16} />
            </div>

            <div className="space-y-2 max-w-2xl">
              <Skeleton />
              <Skeleton />
              <Skeleton width="70%" />
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Skeleton width={90} height={42} borderRadius={12} />
              <Skeleton width={120} height={42} borderRadius={12} />
              <Skeleton width={140} height={42} borderRadius={12} />
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 items-start">
        <section className="space-y-4">
          <Skeleton width={140} height={24} />
          <div className="space-y-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-gray-100 dark:bg-zinc-900 rounded-xl p-4 space-y-2">
                <div className="flex items-center gap-x-3">
                  <Skeleton circle width={36} height={36} />
                  <div className="flex-1 space-y-1">
                    <Skeleton width={120} height={12} />
                    <Skeleton width={80} height={10} />
                  </div>
                </div>
                <Skeleton />
                <Skeleton width="60%" />
              </div>
            ))}
          </div>
        </section>

        <div className="space-y-4">
          <div className="dark:bg-zinc-900 bg-gray-50 rounded-2xl p-6 space-y-3">
            <Skeleton width={90} height={18} className="mb-2" />
            <ul className="space-y-2.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <li key={i} className="flex justify-between gap-x-2">
                  <Skeleton width={70} height={14} />
                  <Skeleton width={90} height={14} />
                </li>
              ))}
            </ul>
          </div>

          <div className="dark:bg-zinc-900 bg-gray-50 rounded-2xl p-6 space-y-3">
            <Skeleton width={120} height={18} className="mb-2" />
            <div className="grid grid-cols-3 gap-2">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="bg-white dark:bg-zinc-800 rounded-xl p-3 space-y-1.5">
                  <Skeleton height={20} />
                  <Skeleton height={12} width={40} className="mx-auto" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductInfoPageSkeleton
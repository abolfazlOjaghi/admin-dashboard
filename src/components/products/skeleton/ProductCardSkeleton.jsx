import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const ProductCardSkeleton = () => {
  return (
    <>
      {Array.from({ length: 5 }).map((_, i) => {
        return (
          <div
            className="rounded-xl overflow-hidden bg-gray-100 dark:bg-zinc-950 pb-4 w-full"
            key={i}
          >
            <Skeleton height={220} />

            <div className="px-3 py-2 space-y-3">
              <Skeleton height={28} />
              <Skeleton width="45%" height={36} />
              <Skeleton width="55%" height={22} />
            </div>

            <div className="px-6 py-2">
              <Skeleton height={42} borderRadius={12} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductCardSkeleton;

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const ProductRowSkeleton = () => {
  return (
    <div className="w-full flex items-center bg-gray-100 dark:bg-zinc-950 rounded-xl gap-x-4 pr-32">
      <Skeleton width={208} height={208} />

      <div className="flex justify-between items-center w-full">
        <div className="space-y-3">
          <Skeleton width={220} height={28} />
          <Skeleton width={140} height={22} />
        </div>

        <div className="flex items-center gap-x-4">
          <Skeleton width={90} height={36} />
          <Skeleton width={120} height={44} borderRadius={12} />
        </div>
      </div>
    </div>
  );
};
export default ProductRowSkeleton
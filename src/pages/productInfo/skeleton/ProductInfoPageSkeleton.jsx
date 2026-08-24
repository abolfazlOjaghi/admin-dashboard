import CommentSkeleton from "../../../components/comment/skeleton/CommentSkeleton";
import Skeleton from "react-loading-skeleton";
import { fields } from "../../../data/productInfoFields";
import { dimensionsFields } from "../../../data/productInfoFields";
const DetailsSkeleton = () => {
  return (
    <section className="space-y-4 details flex items-center gap-x-4">
      <ul className="dark:bg-zinc-900 rounded-xl p-12 space-y-4 bg-gray-50">
        <h3>Details</h3>

        {fields.map((field) => (
          <li key={field.id} className="flex gap-x-2">
            <Skeleton width={70} />
            <span>:</span>
            <Skeleton width={90} />
          </li>
        ))}
      </ul>

      <div className="space-y-8">
        <ul className="dark:bg-zinc-900 bg-gray-50 rounded-xl p-12 space-y-4">
          <h3>Dimensions</h3>

          <div className="flex gap-x-4">
            {dimensionsFields.map((field) => (
              <li key={field.id} className="flex gap-x-2">
                <Skeleton width={70} />
                <span>:</span>
                <Skeleton width={60} />
              </li>
            ))}
          </div>
        </ul>

        <div className="dark:bg-zinc-900 p-8 rounded-xl bg-gray-50">
          <Skeleton width={100} height={48} />
        </div>
      </div>
    </section>
  );
};
const ProductInfoPageSkeleton = () => {
  return (
      <section className="dark:bg-zinc-950 bg-gray-100 p-16 rounded-xl">
        <div className="flex items-center gap-x-8">
          <Skeleton
            width={250}
            height={250}
            borderRadius={12}
          />

          <div className="space-y-4 flex-1">
            <div className="space-y-2">
              <Skeleton width={250} height={32} />
              <Skeleton width={100} height={18} />
            </div>

            <Skeleton count={3} width="66%" />
          </div>
        </div>

        <h3>Reviews</h3>

        <div className="grid grid-cols-2 *:w-full gap-x-6 items-center">
          <div className="w-1/2 space-y-6">
            {Array.from({ length: 3 }).map((_, index) => (
              <CommentSkeleton key={index} />
            ))}
          </div>

          <DetailsSkeleton />
        </div>
      </section>
  );
};
export default ProductInfoPageSkeleton
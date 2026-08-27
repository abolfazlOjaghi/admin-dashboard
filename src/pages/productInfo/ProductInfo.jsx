import { Navigate, useParams } from "react-router";
import { useFetch } from "../../hooks/useFetch";
import { getSingleProduct } from "../../services/requests/products";
import Details from "./components/Details";
import Comment from "../../components/comment/Comment";
import BackButton from "../../components/ui/BackButton";
import ProductInfoPageSkeleton from "./skeleton/ProductInfoPageSkeleton";
import { Star, Package, ShieldCheck } from "lucide-react";
const StarRating = ({ rating = 0 }) => {
  const rounded = Math.round(rating);
  return (
    <div className="flex items-center gap-x-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rounded ? "fill-amber-500 text-amber-500" : "text-gray-300 dark:text-zinc-700"}
        />
      ))}
    </div>
  );
};

const ProductsInfo = () => {
  const { productId } = useParams();
  const { data, isLoading, isError } = useFetch(
    () => getSingleProduct(productId),
    [productId],
  );
  if (isError) {
    return <Navigate to="/404" replace />;
  }
  return (
    <div className="page space-y-4 min-h-screen">
      <BackButton />
      {isLoading ? (
        <ProductInfoPageSkeleton />
      ) : (
        <div className="space-y-6">
          <section className="dark:bg-zinc-950 bg-gray-100 rounded-2xl p-6 md:p-10">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shrink-0 size-52 md:size-64 flex items-center justify-center mx-auto md:mx-0">
                <img
                  src={data?.thumbnail}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex-1 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-600/10 px-2.5 py-1 rounded-full uppercase tracking-wide">
                    {data?.category}
                  </span>
                  {data?.brand && (
                    <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-zinc-800 px-2.5 py-1 rounded-full">
                      {data.brand}
                    </span>
                  )}
                </div>

                <h1 className="text-2xl md:text-3xl font-bold">{data?.title}</h1>

                <div className="flex items-center gap-x-2">
                  <StarRating rating={data?.rating} />
                  <span className="text-sm font-semibold">{data?.rating?.toFixed(1)}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    ({data?.reviews?.length} reviews)
                  </span>
                </div>

                <p className="text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl">
                  {data?.description}
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <div className="flex items-center gap-x-2 bg-white dark:bg-zinc-900 rounded-xl px-4 py-2.5">
                    <span className="text-xl font-bold text-blue-600">{data?.price}$</span>
                  </div>
                  <div className="flex items-center gap-x-2 bg-white dark:bg-zinc-900 rounded-xl px-4 py-2.5">
                    <Package size={16} className="text-gray-400" />
                    <span className="text-sm font-medium">
                      {data?.stock > 0 ? `${data.stock} in stock` : "Out of stock"}
                    </span>
                  </div>
                  {data?.warrantyInformation && (
                    <div className="flex items-center gap-x-2 bg-white dark:bg-zinc-900 rounded-xl px-4 py-2.5">
                      <ShieldCheck size={16} className="text-gray-400" />
                      <span className="text-sm font-medium">{data.warrantyInformation}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 items-start">
            <section className="space-y-4">
              <h3 className="text-xl font-semibold">
                Reviews <span className="text-gray-400 font-medium">({data?.reviews?.length})</span>
              </h3>
              <div className="space-y-3">
                {data?.reviews.map((review) => (
                  <Comment
                    key={review.id}
                    body={review.comment}
                    fullName={review.reviewerName}
                    email={review.reviewerEmail}
                    rating={review.rating}
                  />
                ))}
              </div>
            </section>

            <div className="lg:sticky lg:top-24">
              <Details productDetails={data} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProductsInfo;

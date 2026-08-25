import { Navigate, useNavigate, useParams } from "react-router";
import { useFetch } from "../../hooks/useFetch";
import { getSingleProduct } from "../../services/requests/products";
import Details from "./components/Details";
import Comment from "../../components/comment/Comment";
import BackButton from "../../components/ui/BackButton";
import ProductInfoPageSkeleton from "./skeleton/ProductInfoPageSkeleton";
const ProductsInfo = () => {
  const { productId } = useParams();
  const { data, isLoading, isError } = useFetch(
    () => getSingleProduct(productId),
    [productId],
  );
  if (isError) {
    return <Navigate to="/404" replace/>
  }
  return (
    <div className="page space-y-3 min-h-screen">
      <BackButton />
      {
        isLoading ? (
          <ProductInfoPageSkeleton/>
        ) : (
        <section className="dark:bg-zinc-950 bg-gray-100 p-16 rounded-xl">
        <div className="flex items-center">
          <img src={data?.thumbnail} alt="" />
          <div className="space-y-4">
            <div className="space-y-1">
              <h3>{data?.title}</h3>
              <span className="text-sm text-gray-500 font-semibold">
                {data?.category}
              </span>
            </div>
            <p className="text-gray-500 font-medium w-2/3">
              {data?.description}
            </p>
          </div>
        </div>
        <h3>Reviews</h3>
        <div className="grid grid-cols-2 *:w-full gap-x-6 items-center">
          <div className="w-1/2 space-y-4">
            <div className="space-y-6">
              {data?.reviews.map((review) => {
                return (
                  <Comment
                    key={review.id}
                    body={review.comment}
                    fullName={review.reviewerName}
                    email={review.reviewerEmail}
                    rating={review.rating}
                  />
                );
              })}
            </div>
          </div>
          <div>
            <Details productDetails={data} />
          </div>
        </div>
      </section>
        )
      }
    </div>
  );
};
export default ProductsInfo;

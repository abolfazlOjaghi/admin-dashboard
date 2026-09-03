import InfoSection from "../../features/InfoSection/InfoSection";
import MonthlyRevenueChart from "../../components/charts/MonthlyRevenueChart";
import MonthsInfo from "./components/MonthsInfo";
import ProductCard from "../../components/products/ProductCard";
import { getProducts } from "../../services/requests/products";
import { getProductHighlights } from "../../utils/getProductHighlights";
import Badge from "../../components/products/Badge";
import { getUsers } from "../../services/requests/users";
import UserRow from "../../components/user/UserRow";
import { useFetch } from "../../hooks/useFetch";
import { getComments } from "../../services/requests/comments";
import Comment from "../../components/comment/Comment";
import { getLatests } from "../../utils/getLatests";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import ProductCardSkeleton from "../../components/products/skeleton/ProductCardSkeleton";
import CommentSkeleton from "../../components/comment/skeleton/CommentSkeleton";
import UserSkeleton from "../../components/user/skeleton/UserSkeleton";
import ErrorState from "../../components/ErrorState";
import clsx from "clsx";
const Home = () => {
  const [chartType, setChartType] = useLocalStorage("chartType", "line");
  const {
    data: productsData,
    isLoading: productsLoading,
    isError: productsError,
    refetch: refetchProducts,
  } = useFetch(() => getProducts(), ["products"]);
  const {
    data: usersData,
    isLoading: usersLoading,
    isError: usersError,
    refetch: usersRefetch,
  } = useFetch(() => getUsers(), ["home-users"]);
  const highlights = productsData
    ? getProductHighlights(productsData.products)
    : [];
  const {
    data: comments,
    isLoading: commentsLoading,
    isError: commentsError,
    refetch: commentsRefetch,
  } = useFetch(getComments, ["comments"]);
  const latestComments = getLatests(comments?.comments);
  const latestUsers = getLatests(usersData?.users);
  return (
    <div className="page space-y-12">
      <InfoSection
        totalProducts={productsData?.total}
        totalUsers={usersData?.total}
        totalComments={comments?.total}
      />
      <section>
        <h3 className="ml-14">Revenue Overview</h3>
        <div className="flex gap-x-16 items-center">
          <MonthlyRevenueChart
            chartType={chartType}
            switchChartMode={(e) => {
              chartType !== e.target.name &&
                (chartType === "bar"
                  ? setChartType("line")
                  : setChartType("bar"));
            }}
          />
          <MonthsInfo />
        </div>
      </section>
      <section>
        <h3>Product Highlights</h3>
        <div
          className={clsx(
            !productsError
              ? "grid grid-cols-4 gap-x-16"
              : "flex justify-center",
          )}
        >
          {productsLoading ? (
            <ProductCardSkeleton num={4} />
          ) : (
            highlights?.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  infoRoot={`/products/${product.id}`}
                  image={product.images[0]}
                  title={product.title}
                  price={product.price}
                  rating={product.rating}
                  children={<Badge text={product.text} color={product.color} />}
                  dependencyArray={["products"]}
                />
              );
            })
          )}
          {productsError && (
            <ErrorState
              onRetry={refetchProducts}
              home={false}
              paddingY="py-4"
            />
          )}
        </div>
      </section>
      <section>
        <h3>Latest Users</h3>
        <div className="space-y-4">
          {usersLoading
            ? Array.from({ length: 5 }).map((_, i) => {
                return <UserSkeleton key={i} />;
              })
            : latestUsers.map((user) => {
                return (
                  <UserRow
                    key={user.id}
                    id={user.id}
                    firstName={user.firstName}
                    lastName={user.lastName}
                    username={user.username}
                    image={user.image}
                    dependencyArray={["home-users"]}
                  />
                );
              })}
          {usersError && (
            <ErrorState onRetry={usersRefetch} home={false} paddingY="py-4" />
          )}
        </div>
      </section>
      <section>
        <h3>Recent Comments</h3>
        <div className="space-y-4">
          {commentsLoading
            ? Array.from({ length: 5 }).map((_, i) => {
                return <CommentSkeleton key={i} />;
              })
            : latestComments.map((comment) => {
                return (
                  <Comment
                    key={comment.id}
                    id={comment.id}
                    body={comment.body}
                    fullName={comment.user.fullName}
                    username={comment.user.username}
                    likes={comment.likes}
                    dependencyArray={["comments"]}
                  />
                );
              })}
          {commentsError && (
            <ErrorState
              onRetry={commentsRefetch}
              home={false}
              paddingY="py-4"
            />
          )}
        </div>
      </section>
    </div>
  );
};
export default Home;

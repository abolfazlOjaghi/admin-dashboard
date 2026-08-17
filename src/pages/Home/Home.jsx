import InfoSection from "../../features/InfoSection/InfoSection";
import MonthlyRevenueChart from "../../components/charts/MonthlyRevenueChart";
import MonthsInfo from "./components/MonthsInfo";
import { useState, useEffect } from "react";
import ProductCard from "../../components/products/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/requests/products";
import { getProductHighlights } from "../../utils/getProductHighlights";
import Badge from "../../components/products/Badge";
import { getUsers } from "../../services/requests/users";
import UserRow from "../../components/user/UserRow";
import { useFetch } from "../../hooks/useFetch";
import { getAllComments } from "../../services/requests/comments";
import Comment from "../../components/comment/Comment";
import { getLatests } from "../../utils/getLatests";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import ProductCardSkeleton from "../../components/products/skeleton/ProductCardSkeleton";
import CommentSkeleton from "../../components/comment/skeleton/CommentSkeleton";
import UserSkeleton from "../../components/user/skeleton/UserSkeleton";
const Home = () => {
  const [chartType, setChartType] = useLocalStorage("chartType", "line");
  const {
    data: productsData,
    isLoading : productsLoading,
    isError,
  } = useFetch(() => getProducts(), ["products"]);
  const {
    data: usersData,
    isLoading: usersLoading,
    isError: usersError,
  } = useFetch(getUsers, ["home-users"]);
  const highlights = productsData
    ? getProductHighlights(productsData.products)
    : [];
  const {
    data: comments,
    isLoading: commentsLoading,
    isError: commentsError,
  } = useFetch(getAllComments, ["comments"]);
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
        <div className="grid grid-cols-4 gap-x-16">
          {productsLoading ? (
            <ProductCardSkeleton num={4}/>
          ) : highlights?.map((product) => {
            return (
              <ProductCard
                key={product.id}
                infoRoot={`/products/${product.id}`}
                image={product.images[0]}
                title={product.title}
                price={product.price}
                rating={product.rating}
                children={<Badge text={product.text} color={product.color} />}
              />
            );
          })}
        </div>
      </section>
      <section>
        <h3>Latest Users</h3>
        <div className="space-y-4">
          {usersLoading ? (
            Array.from({ length : 5 }).map((_, i) => {
              return <UserSkeleton key={i}/>
            })
          ) : latestUsers.map((user) => {
            return (
              <UserRow
                key={user.id}
                firstName={user.firstName}
                lastName={user.lastName}
                image={user.image}
                username={user.username}
                id={user.id}
              />
            );
          })}
        </div>
      </section>
      <section>
        <h3>Recent Comments</h3>
        <div className="space-y-4">
          {commentsLoading ? (
            Array.from({ length : 5 }).map((_, i) => {
              return <CommentSkeleton key={i}/>
            })
          ) : latestComments.map((comment) => {
            return (
              <Comment
                body={comment.body}
                fullName={comment.user.fullName}
                username={comment.user.username}
                likes={comment.likes}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};
export default Home;

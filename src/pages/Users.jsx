import { useFetch } from "../hooks/useFetch";
import { getUsers } from "../services/requests/users";
import UsersRow from "../components/user/UserRow";
import { useState, useEffect, useRef, useContext } from "react";
import UserSkeleton from "../components/user/skeleton/UserSkeleton";
import { USERS_LIMIT } from "../data/constans";
import { usePagination } from "../hooks/usePagination";
import PaginatingControls from "../components/PaginationControls";
import Input from "../components/ui/Input";
import { Search } from "lucide-react";
import ErrorState from "../components/ErrorState";
import { AuthContext } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import EmptyResult from "../components/EmptyResult";
import { UserRound } from "lucide-react";
const Users = () => {
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [totalUsers, setTotalUsers] = useState(0);
  const { user: currentUser } = useContext(AuthContext);
  const { register, watch } = useForm({ defaultValues: { search: "" } });
  const searchValue = watch("search");

  const {
    page: currentPage,
    pages,
    nextPage,
    prevPage,
    goToPage,
  } = usePagination(totalUsers, USERS_LIMIT);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchValue);
    }, 700);
    return () => clearTimeout(timer);
  }, [searchValue]);

  const {
    data: users,
    isLoading,
    isError,
    refetch,
  } = useFetch(
    () =>
      getUsers({
        limit: USERS_LIMIT,
        page: currentPage,
        search: debouncedSearch,
      }),
    ["users", currentPage, debouncedSearch],
  );

  const prevSearch = useRef(debouncedSearch);
  useEffect(() => {
    if (prevSearch.current !== "" && debouncedSearch === "") {
      goToPage(1);
    }
    prevSearch.current = debouncedSearch;
  }, [debouncedSearch]);

  useEffect(() => {
    users?.total && setTotalUsers(users?.total);
  }, [users]);

  if (isError) {
    return <ErrorState onRetry={refetch} />;
  }

  return (
    <div className="page space-y-6">
      <h3>Users</h3>
      <div className="dark:bg-zinc-950 bg-gray-200 rounded-lg py-4 px-8 shadow-md">
        <Input
          {...register("search")}
          width="w-80"
          placeholder="Search Users..."
        >
          <Search
            size={18}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
          />
        </Input>
      </div>
      <div>
        {isLoading ? (
          Array.from({ length: 10 }).map((_, index) => (
            <UserSkeleton key={index} />
          ))
        ) : users?.users?.length > 0 ? (
          users.users.map((user) => (
            <UsersRow
              key={user.id}
              firstName={user.firstName}
              lastName={user.lastName}
              username={user.username}
              image={user.image}
              id={user.id}
              dependencyArray={["users", currentPage, debouncedSearch]}
              you={currentUser.username === user.username}
            />
          ))
        ) : (
          <EmptyResult item="user">
            <UserRound size={32} />
          </EmptyResult>
        )}
      </div>
      {!searchValue && (
        <PaginatingControls
          pagesArray={pages}
          currentPage={currentPage}
          nextPage={nextPage}
          prevPage={prevPage}
          goToPage={goToPage}
          prevDisabled={users?.skip === 0}
          nextDisabled={users?.skip + users?.limit >= users?.total}
        />
      )}
    </div>
  );
};
export default Users;

import { useFetch } from "../hooks/useFetch";
import { getUsers } from "../services/requests/users";
import UsersRow from "../components/user/UserRow";
import { useState, useEffect, useRef } from "react";
import UserSkeleton from "../components/user/skeleton/UserSkeleton";
import { USERS_LIMIT } from "../data/constans";
import { usePagination } from "../hooks/usePagination";
import PaginatingControls from "../components/PaginationControls";
import Input from "../components/ui/Input";
import { Search } from "lucide-react";
const Users = () => {
  const [searchValue, setSearchValue] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [totalUsers, setTotalUsers] = useState(0);
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
  const { data: users, isLoading } = useFetch(
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

  return (
    <div className="page space-y-6">
      <h3>Users</h3>
      <div className="dark:bg-zinc-950 bg-gray-200 rounded-lg py-4 px-8 shadow-md">
        <Input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
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
            />
          ))
        ) : (
          <div className="min-h-72 flex flex-col items-center justify-center text-center">
            <div className="size-16 rounded-full bg-gray-200 dark:bg-zinc-800 flex items-center justify-center mb-4">
              <span className="text-2xl">👤</span>
            </div>

            <h4 className="text-xl font-semibold">
              {debouncedSearch ? "No users found" : "No users available"}
            </h4>

            <p className="text-gray-500 dark:text-gray-400 mt-1">
              {debouncedSearch
                ? "Try searching with a different name."
                : "There are no users to display right now."}
            </p>
          </div>
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

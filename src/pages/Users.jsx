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
        <Input searchValue={searchValue} searchInputChange={(e) => setSearchValue(e.target.value)}>
          <Search
            size={18}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
          />
        </Input>
      </div>
      <div>
        {isLoading
          ? Array.from({ length: 10 }).map((_, index) => (
              <UserSkeleton key={index} />
            ))
          : users?.users.map((user) => {
              return (
                <UsersRow
                  key={user.id}
                  firstName={user.firstName}
                  lastName={user.lastName}
                  username={user.username}
                  image={user.image}
                  id={user.id}
                  dependencyArray={["users", currentPage, debouncedSearch]}
                />
              );
            })}
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

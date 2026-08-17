import { useFetch } from "../hooks/useFetch";
import { getUsers } from "../services/requests/users";
import UsersRow from "../components/UserRow";
import { useState, useEffect } from "react";
const Users = () => {
  const [searchValue, setSearchValue] = useState();
  const [debouncedSearch, setDebouncedSearch] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchValue);
    }, 700);
    return () => clearTimeout(timer);
  }, [searchValue]);
  const { data: users } = useFetch(() => getUsers(debouncedSearch), ["users", debouncedSearch]);
  return (
    <div className="page space-y-6">
      <h3>Users</h3>
      <div className="bg-zinc-900 rounded-lg py-4 px-8">
        <input
          type="text"
          className="px-6 py-2 rounded-xl focus:outline-none dark:bg-zinc-950 bg-gray-100 w-80 font-semibold"
          placeholder="Search Users..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div>
        {users?.users.map((user) => {
          return (
            <UsersRow
              key={user.id}
              firstName={user.firstName}
              lastName={user.lastName}
              username={user.username}
              image={user.image}
              id={user.id}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Users;

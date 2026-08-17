import { useFetch } from "../hooks/useFetch";
import { getUsers } from "../services/requests/users";
import UsersRow from "../components/UserRow";
const Users = () => {
  const { data: users } = useFetch(getUsers, ["users"]);
  return (
    <div className="page space-y-6">
      <h3>Users</h3>
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

import { useParams } from "react-router";
import { useFetch } from "../../hooks/useFetch";
import { getUserById } from "../../services/requests/users";
import { personalInfoFields, addressFields } from "../../data/userInfoFields";
import InfoRow from "./components/InfoRow";
import BackButton from "../../components/ui/BackButton";
const UserProfilePage = () => {
  const { userId } = useParams();
  const { data: user } = useFetch(() => getUserById(userId), ["user", userId]);
  const emailField = personalInfoFields.find((item) => item.key === "email");
  return (
    <div className="page space-y-3">
      <BackButton />
      <section className="bg-gray-100 dark:bg-zinc-950 rounded-xl py-8 px-16">
        <div className="flex flex-col items-center justify-center">
          <img
            src={user?.image}
            alt=""
            className="rounded-full overflow-hidden size-20 border-2 border-gray-500"
          />
          <p className="text-lg font-medium">
            {user?.firstName} {user?.lastName}
          </p>
          <span className="text-gray-500 font-semibold">@{user?.username}</span>
        </div>
        <div className="*:space-y-4 space-y-4">
          <div>
            <h3>Personal Information</h3>
            {personalInfoFields.map((info) => {
              return (
                <InfoRow
                  key={info.id}
                  label={info.label}
                  value={user?.[info.key]}
                />
              );
            })}
          </div>
          <div>
            <h3>Address</h3>
            {addressFields.map((address) => {
              return (
                <InfoRow
                  key={address.id}
                  label={address.label}
                  value={user?.address[address.key]}
                />
              );
            })}
          </div>
        </div>
        <button
          disabled={!user}
          className="bg-blue-600 text-white rounded-xl cursor-pointer py-1.5 px-6 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => {
            if (user?.[emailField.key]) {
              window.location.href = `mailto:${user[emailField.key]}`;
            }
          }}
        >
          Send an email
        </button>
      </section>
    </div>
  );
};
export default UserProfilePage;

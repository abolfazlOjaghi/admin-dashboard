import { useParams } from "react-router";
import { useFetch } from "../../hooks/useFetch";
import { getUserById } from "../../services/requests/users";
import { personalInfoFields, addressFields } from "../../data/userInfoFields";
import InfoRow from "./components/InfoRow";
import BackButton from "../../components/ui/BackButton";
import UserProfilePageSkeleton from "./skeleton/UserProfilePageSkeleton";
import { Mail, MapPin } from "lucide-react";
import { Navigate } from "react-router";
import ErrorState from "../../components/ErrorState";
const UserProfilePage = () => {
  const { userId } = useParams();
  const {
    data: user,
    isLoading,
    isError,
    error,
    refetch,
  } = useFetch(() => getUserById(userId), ["user", userId]);
  const emailField = personalInfoFields.find((item) => item.key === "email");
  if (isError) {
    const status = error?.response?.status;
    if (status === 404) {
      return <Navigate to="/404" replace />;
    }
    return <ErrorState onRetry={refetch} />;
  }
  return (
    <div className="page space-y-3">
      <BackButton />
      {isLoading ? (
        <UserProfilePageSkeleton />
      ) : (
        <section className="bg-gray-100 dark:bg-zinc-950 rounded-2xl overflow-hidden">
          <div className="h-32 bg-linear-to-r from-blue-600 to-indigo-600 relative">
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
              <img
                src={user?.image}
                alt=""
                className="rounded-full size-24 object-cover border-4 border-gray-100 dark:border-zinc-950"
              />
            </div>
          </div>

          <div className="pt-16 pb-10 px-6 md:px-16 space-y-8">
            <div className="text-center space-y-1">
              <p className="text-xl font-semibold">
                {user?.firstName} {user?.lastName}
              </p>
              <span className="text-gray-500 dark:text-gray-400 font-medium">
                @{user?.username}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 space-y-3">
                <h3 className="text-lg font-semibold mb-1">
                  Personal Information
                </h3>
                {personalInfoFields.map((info) => (
                  <InfoRow
                    key={info.id}
                    label={info.label}
                    value={user?.[info.key]}
                  />
                ))}
              </div>

              <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 space-y-3">
                <h3 className="text-lg font-semibold mb-1 flex items-center gap-x-2">
                  <MapPin size={18} className="text-blue-600" />
                  Address
                </h3>
                {addressFields.map((address) => (
                  <InfoRow
                    key={address.id}
                    label={address.label}
                    value={user?.address[address.key]}
                  />
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <button
                disabled={!user}
                className="flex items-center gap-x-2 bg-blue-600 text-white rounded-full cursor-pointer py-2.5 px-6 font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => {
                  if (user?.[emailField.key]) {
                    window.location.href = `mailto:${user[emailField.key]}`;
                  }
                }}
              >
                <Mail size={18} />
                Send an email
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
export default UserProfilePage;

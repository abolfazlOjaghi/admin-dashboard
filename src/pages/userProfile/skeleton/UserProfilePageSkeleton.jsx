import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { personalInfoFields, addressFields } from "../../../data/userInfoFields";
const UserProfilePageSkeleton = () => {
  return (
      <section className="bg-gray-100 dark:bg-zinc-950 rounded-xl py-8 px-16">
        <div className="flex flex-col items-center justify-center">
          <Skeleton circle width={80} height={80} />

          <Skeleton width={140} height={24} className="mt-2" />

          <Skeleton width={100} height={18} />
        </div>
        <div className="space-y-4 mt-8">
          <div>
            <h3>Personal Information</h3>

            <div className="space-y-4">
              {personalInfoFields.map((info) => (
                <div key={info.id} className="space-y-2">
                  <Skeleton width={100} height={18} />

                  <div className="px-6 py-3 rounded-lg dark:bg-zinc-900 bg-gray-200">
                    <Skeleton height={22} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3>Address</h3>

            <div className="space-y-4">
              {addressFields.map((address) => (
                <div key={address.id} className="space-y-2">
                  <Skeleton width={100} height={18} />

                  <div className="px-6 py-3 rounded-lg dark:bg-zinc-900 bg-gray-200">
                    <Skeleton height={22} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Skeleton width={130} height={40} borderRadius={12} className="mt-6" />
      </section>
  );
};

export default UserProfilePageSkeleton;
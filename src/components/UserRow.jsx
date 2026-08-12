import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
const UserRow = ({
  firstName,
  lastName,
  username,
  email,
  phone,
  image,
  password,
  address,
  age,
}) => {
  const [isMoreInfoOpen, setIsMoreInfoOpen] = useState(false);
  return (
    <div className="bg-gray-100 dark:bg-zinc-900 rounded-xl px-12 py-4 space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-x-3 items-center">
          <img
            src={image}
            alt=""
            className="rounded-full overflow-hidden size-20 border-2 border-gray-500"
          />
          <div>
            <p className="font-medium text-lg">
              {firstName} {lastName}
            </p>
            <span className="text-gray-500 font-semibold">@{username}</span>
          </div>
        </div>
        <button
          className="py-1.5 text-lg font-medium px-4 rounded-xl bg-gray-50 dark:bg-zinc-950 flex items-center gap-x-1.5 cursor-pointer"
          onClick={() => setIsMoreInfoOpen((prev) => !prev)}
        >
          <p>show more info</p>
          {!isMoreInfoOpen ? <ChevronDown /> : <ChevronUp />}
        </button>
      </div>
      {isMoreInfoOpen && (
        <div className="font-medium text-gray-500">
          <p>phone : {phone}</p>
          <p>email : {email}</p>
          <p>password : {password}</p>
          <p>country : {address.country}</p>
          <p>city : {address.city}</p>
          <p>age : {age}</p>
        </div>
      )}
    </div>
  );
};
export default UserRow;

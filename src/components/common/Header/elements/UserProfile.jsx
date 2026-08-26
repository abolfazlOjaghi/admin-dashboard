const UserProfile = () => {
  return (
    <div className="flex items-center gap-x-3">
      <div className="size-11 rounded-full overflow-hidden ring-2 ring-blue-600/20 shrink-0">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/d/d7/Random_person_image.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <p className="font-semibold leading-tight dark:text-white">
          Emilia Watson
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
          Admin
        </p>
      </div>
    </div>
  );
};
export default UserProfile;

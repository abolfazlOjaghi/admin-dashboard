import { House, MoveLeft } from "lucide-react";
import { useNavigate } from "react-router";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center flex-col gap-8 w-screen h-screen bg-white dark:bg-black px-6 text-center">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-8xl md:text-9xl font-bold text-blue-600">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-200">
          Page Not Found
        </h2>
        <p className="text-gray-500 dark:text-gray-400 font-medium max-w-sm">
          The page you're looking for doesn't exist or has been moved.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-x-4 gap-y-3">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-x-2 rounded-xl px-5 py-2.5 font-medium border-2 border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-gray-200 hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-500 transition-colors cursor-pointer"
        >
          <MoveLeft size={18} />
          Go Back
        </button>
        <button
          onClick={() => navigate("/", { replace: true })}
          className="flex items-center gap-x-2 rounded-xl px-5 py-2.5 font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors cursor-pointer"
        >
          <House size={18} />
          Home
        </button>
      </div>
    </div>
  );
};
export default NotFound;

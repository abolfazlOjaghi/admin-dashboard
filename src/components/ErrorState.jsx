import { ServerCrash, RotateCw, House } from "lucide-react";
import { useNavigate } from "react-router";

const ErrorState = ({ onRetry }) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center flex-col gap-8 py-24 px-6 text-center dark:bg-black w-full h-screen">
      <div className="flex flex-col items-center gap-2">
        <div className="bg-red-600/10 text-red-600 rounded-full p-4">
          <ServerCrash size={40} />
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-200 mt-2">
          Something went wrong
        </h2>
        <p className="text-gray-500 dark:text-gray-400 font-medium max-w-sm">
          We couldn't load this page. It might be a temporary issue — please try
          again.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-x-4 gap-y-3">
        <button
          onClick={() => navigate("/", { replace: true })}
          className="flex items-center gap-x-2 rounded-xl px-5 py-2.5 font-medium border-2 border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-gray-200 hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-500 transition-colors cursor-pointer"
        >
          <House size={18} />
          Home
        </button>
        <button
          onClick={onRetry}
          className="flex items-center gap-x-2 rounded-xl px-5 py-2.5 font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors cursor-pointer"
        >
          <RotateCw size={18} />
          Try Again
        </button>
      </div>
    </div>
  );
};
export default ErrorState;

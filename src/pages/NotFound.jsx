import { House, MoveLeft } from "lucide-react";
import { useNavigate } from "react-router";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center flex-col gap-10 w-screen h-screen">
      <div className="flex flex-col items-center *:font-semibold">
        <h1 className="text-9xl text-red-600">404</h1>
        <h2 className="text-4xl text-gray-600">Page Not Found</h2>
      </div>
      <div className="flex space-x-4 *:rounded-xl *:px-4 *:py-2 *:font-semibold *:transition-all *:cursor-pointer *:border-2 *:border-blue-700 *:hover:bg-blue-700  *:text-black *:hover:text-white *:flex *:items-center *:gap-1.5">
        <button onClick={() => navigate(-1, { replace: true })}>
          Go Back <MoveLeft />
        </button>
        <button onClick={() => navigate("/", { replace: true })}>
          Home <House />
        </button>
      </div>
    </div>
  );
};
export default NotFound;

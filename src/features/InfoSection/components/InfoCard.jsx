import Skeleton from "react-loading-skeleton";
const InfoCard = ({ title, value, icon: Icon }) => {
  return (
    <div className="group rounded-2xl p-6 flex justify-between items-center bg-gray-50 dark:bg-neutral-950 border border-gray-100 dark:border-zinc-800 shadow-sm hover:shadow-2xl transition-all duration-300 ease-out hover:-translate-y-1.5 hover:bg-neutral-950 dark:hover:bg-white h-fit">
      <div>
        <h5 className="font-semibold text-gray-500 dark:text-gray-400 group-hover:text-gray-300 dark:group-hover:text-gray-600 transition-colors duration-300">
          {title}
        </h5>
        {value ? (
          <p className="font-semibold text-3xl text-gray-900 dark:text-white group-hover:text-white dark:group-hover:text-neutral-950 group-hover:text-4xl transition-all duration-300">
            {value}
          </p>
        ) : (
          <Skeleton width={80} height={32} />
        )}
      </div>
      <div className="bg-blue-600/10 group-hover:bg-blue-600 rounded-xl p-3 transition-colors duration-300">
        <Icon
          size={26}
          className="text-blue-600 group-hover:text-white transition-colors duration-300"
        />
      </div>
    </div>
  );
};
export default InfoCard;

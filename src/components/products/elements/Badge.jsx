import clsx from "clsx";
const Badge = ({ text, color, icon: Icon }) => {
  return (
    <div
      className={clsx(
        "absolute top-3 left-3 z-10 flex items-center gap-x-1.5 rounded-full py-1.5 px-3.5 text-sm font-semibold text-white shadow-lg backdrop-blur-sm",
        color,
      )}
    >
      {Icon && <Icon size={14} />}
      {text}
    </div>
  );
};
export default Badge;

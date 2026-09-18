import clsx from "clsx";

const Tags = ({ tags, color="text-blue-600 bg-blue-600/10" }) => {
  return (
    <div className="flex gap-2">
      {tags?.map((tag) => {
        return <div className={clsx("text-xs font-semibold px-2.5 py-1 rounded-full tracking-wide", color)}>{tag}</div>;
      })}
    </div>
  );
};
export default Tags;
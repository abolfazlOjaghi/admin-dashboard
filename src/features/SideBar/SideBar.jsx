import { sideBarItems } from "../../data/sideBarItems";
import SideBarItem from "./components/SideBarItem";
const SideBar = () => {
  return (
    <div className="dark:bg-black py-12 px-6">
      <aside className="bg-gray-100 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 shadow-sm px-3 py-4 rounded-2xl sticky top-32 self-start">
        <ul className="w-full flex flex-col gap-y-1.5">
          {sideBarItems.map((item) => {
            return <SideBarItem key={item.id} {...item} />;
          })}
        </ul>
      </aside>
    </div>
  );
};
export default SideBar;

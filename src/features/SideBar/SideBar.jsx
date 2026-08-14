import { useEffect } from "react";
import { sideBarItems } from "../../data/sideBarItems";
import SideBarItem from "./components/SideBarItem";
const SideBar = () => {
  return (
    <aside className=" bg-gray-50 dark:bg-neutral-950 px-4 py-32 dark:border-white border-r-4 sticky top-24 self-start min-h-screen">
      <p></p>
      <ul className="w-full flex flex-col gap-y-6 justify-center">
        {sideBarItems.map((item) => {
          return <SideBarItem {...item} />;
        })}
      </ul>
    </aside>
  );
};
export default SideBar;

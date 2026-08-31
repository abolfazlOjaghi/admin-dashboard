import { sideBarItems } from "../../data/sideBarItems";
import SideBarItem from "./components/SideBarItem";
import { useState } from "react";
import LogOutButton from "../../components/ui/LogoutButton";
import LogoutModal from "../../components/modal/LogoutModal";
import ModalContainer from "../ModalContainer";
const SideBar = () => {
  const [isLogoutMoalOpen, setIsLogoutMoalOpen] = useState(false)
  return (
    <div className="dark:bg-black py-12 px-6 space-y-3">
      <aside className="bg-gray-100 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 shadow-sm px-3 py-4 rounded-2xl sticky top-32 self-start space-y-5">
        <ul className="w-full flex flex-col gap-y-1.5">
          {sideBarItems.map((item) => {
            return <SideBarItem key={item.id} {...item} />;
          })}
        </ul>
        <div className="dark:bg-black rounded-xl bg-white">
          <LogOutButton action={() => setIsLogoutMoalOpen(true)}/>
        </div>
      </aside>
      {isLogoutMoalOpen && <ModalContainer cancel={() => setIsLogoutMoalOpen(false)}><LogoutModal cancel={() => setIsLogoutMoalOpen(false)}/></ModalContainer>}
    </div>
  );
};
export default SideBar;

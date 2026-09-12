import { sideBarItems } from "../../data/sideBarItems";
import SideBarItem from "./components/SideBarItem";
import { useState } from "react";
import LogOutButton from "../../components/ui/LogoutButton";
import LogoutModal from "../../components/modal/LogoutModal";
import ModalContainer from "../ModalContainer";
import clsx from "clsx";
import { X } from "lucide-react";
const SideBar = ({ isOpen, onClose }) => {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      <div
        className={clsx(
          "fixed top-0 left-0 h-full w-72 z-50 py-6 px-6 dark:bg-black bg-gray-50",
          "transition-transform duration-300 ease-out",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "md:static md:h-auto md:w-auto md:translate-x-0 md:transition-none md:py-12 md:z-auto md:bg-transparent",
        )}
      >
        <div className="flex items-center justify-between mb-4 md:hidden">
          <span className="font-semibold">Menu</span>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-800 cursor-pointer"
          >
            <X size={20} className="dark:text-white" />
          </button>
        </div>

        <aside className="bg-gray-100 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 shadow-sm px-3 py-4 rounded-2xl md:sticky md:top-32 md:self-start space-y-5">
          <ul className="w-full flex flex-col gap-y-1.5">
            {sideBarItems.map((item) => (
              <SideBarItem key={item.id} {...item} onNavigate={onClose} />
            ))}
          </ul>
          <div className="dark:bg-black rounded-xl bg-white">
            <LogOutButton action={() => setIsLogoutModalOpen(true)} />
          </div>
        </aside>
      </div>

      {isLogoutModalOpen && (
        <ModalContainer cancel={() => setIsLogoutModalOpen(false)}>
          <LogoutModal cancel={() => setIsLogoutModalOpen(false)} />
        </ModalContainer>
      )}
    </>
  );
};
export default SideBar;

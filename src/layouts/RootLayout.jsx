import { Outlet, useMatches } from "react-router";
import Header from "../components/common/Header/Header";
import SideBar from "../features/SideBar/SideBar";
import clsx from "clsx";
import { useState } from "react";
const RootLayout = () => {
  const matches = useMatches();
  const isNoutFound = matches.some((match) => match.handle?.isNotFound);
   const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] overflow-x-hidden">
      {!isNoutFound && <Header onMenuClick={() => setIsSidebarOpen(true)} />}
      <main
        className={clsx(
          !isNoutFound ? "grid md:grid-cols-[260px_1fr] pt-24" : "min-h-screen",
        )}
      >
        {!isNoutFound && (
          <SideBar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        )}
        <Outlet />
      </main>
    </div>
  );
};
export default RootLayout;

import { Outlet, useMatches } from "react-router";
import Header from "../components/common/Header/Header";
import SideBar from "../features/SideBar/SideBar";
import clsx from "clsx";
const RootLayout = () => {
  const matches = useMatches();
  const isNoutFound = matches.some((match) => match.handle?.isNotFound);
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      {!isNoutFound && <Header />}
      <main
        className={clsx(
          !isNoutFound ? "grid grid-cols-[260px_1fr] pt-24" : "min-h-screen",
        )}
      >
        {!isNoutFound && <SideBar />}
        <Outlet />
      </main>
      {/* <Footer/> */}
    </div>
  );
};
export default RootLayout;

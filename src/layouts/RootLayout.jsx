import { Outlet } from "react-router"
import Header from "../components/common/Header/Header"
import SideBar from "../features/SideBar/SideBar"
const RootLayout = () => {
    return (
        <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
            <Header/>
            <main className="grid grid-cols-[260px_1fr] pt-24 ">
                <SideBar/>
                <Outlet/>
            </main>
            {/* <Footer/> */}
        </div>
    )
}
export default RootLayout
import { House, SquareChartGantt, UserRound, MessageCircle } from "lucide-react"
export const sideBarItems = [
    {
        id : 1,
        title : "Home",
        link : "/",
        icon : <House />
    },
    {
        id : 2,
        title : "Products",
        link : "/products",
        icon : <SquareChartGantt />
    },
    {
        id : 3,
        title : "Users",
        link : "/users",
        icon : <UserRound />
    },
    {
        id : 4,
        title : "Comments",
        link : "/comments",
        icon : <MessageCircle />
    },
]
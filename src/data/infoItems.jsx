import { DollarSign, UserRound, SquareChartGantt, MessageCircle } from "lucide-react";
import { getComments } from "../services/requests/comments";
export const infoItems = [
  {
    title: "Total Revenue",
    value: "74910$",
    icon : DollarSign
  },
  {
    title: "Total Users",
    value: getComments().total,
    icon: UserRound
  },
  {
    title: "Total Products",
    value: 3012,
    icon: SquareChartGantt
  },
  {
    title: "Total Comments",
    value: 32,
    icon: MessageCircle
  },
];

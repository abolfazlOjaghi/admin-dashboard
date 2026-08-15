import { DollarSign } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
const InfoCard = ({ title, value, icon : Icon }) => {
    const [theme] = useContext(ThemeContext) 
  return (
    <div className="rounded-xl p-8 flex justify-between items-center dark:bg-neutral-950 bg-gray-50 shadow-xl h-fit dark:hover:bg-white hover:bg-neutral-950 dark:hover:text-neutral-950 hover:text-white transition-all duration-300 ease-out hover:scale-105 hover:translate-y-2 hover:shadow-2xl group">
      <div>
        <h5 className="font-semibold text-gray-700">{title}</h5>
        <p className="font-semibold text-3xl group-hover:text-4xl transition-all duration-300">{value}</p>
      </div>
      <div className="dark:bg-white rounded-lg p-2 bg-neutral-950">
        <Icon size={30} color={theme === "dark" ? "#000" : "#fff"}/>
      </div>
    </div>
  );
};
export default InfoCard;

import InfoCard from "./components/InfoCard";
import { UserRound, SquareChartGantt, MessageCircle, DollarSign } from "lucide-react";
const InfoSection = ({ totalComments, totalUsers, totalProducts }) => {
  return (
    <section className="grid 2xl:grid-cols-4 sm:grid-cols-2 lg:gap-x-6 gap-x-2 grid-cols-1">
        <InfoCard title="Total Revenue" value="$74,910" icon={DollarSign} link="/" />
        <InfoCard
          title="Total Users"
          value={totalUsers}
          icon={UserRound}
          link="/users"
        />
        <InfoCard
          title="Total Products"
          value={totalProducts}
          icon={SquareChartGantt}
          link="/products"
        />
        <InfoCard
          title="Total Comments"
          value={totalComments}
          icon={MessageCircle}
          link="/comments"
        />
    </section>
  );
};
export default InfoSection;

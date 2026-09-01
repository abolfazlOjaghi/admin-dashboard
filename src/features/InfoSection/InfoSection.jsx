import InfoCard from "./components/InfoCard";
import { UserRound, SquareChartGantt, MessageCircle, DollarSign } from "lucide-react";
const InfoSection = ({ totalComments, totalUsers, totalProducts }) => {
  return (
    <section className="grid grid-cols-4 gap-x-12">
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

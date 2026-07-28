import clsx from "clsx";
import { monthlyRevenue } from "../../../mocks/monthlyRevenue";
import { calculatePercantageChanges } from "../../../utils/calculatePercantageChanges";
import { Trophy } from "lucide-react";
import { getBestMonth } from "../../../utils/calculateBestMonth";
const MonthsInfo = () => {
  const monthlyRevenueWithChanges = calculatePercantageChanges(monthlyRevenue);
  const BestMonth = getBestMonth(monthlyRevenueWithChanges);
  return (
    <section className="flex-1 space-y-4">
      <div className="space-y-3 *:bg-zinc-50 *:rounded-xl *:px-8 *:py-4 *:dark:bg-zinc-900">
        <ul className="grid grid-cols-3 font-medium">
          <li className="text-left">Month</li>
          <li className="text-center">Revenue</li>
          <li className="text-right">Changes (%)</li>
        </ul>
        <div>
          {monthlyRevenueWithChanges.map(({ revenue, month, change }) => (
            <ul key={month} className="grid grid-cols-3 py-2 *:font-semibold">
              <li className="text-left">{month}</li>
              <li className="text-center">{revenue}$</li>
              <li
                className={clsx(
                  "font-semibold text-right",
                  change > 0 ? "text-green-600" : change < 0 && "text-red-600",
                )}
              >
                {change > 0 ? `+${change}` : change}
                {(change > 0 || change < 0) && "%"}
              </li>
            </ul>
          ))}
        </div>
      </div>
      <div className="h-44 rounded-xl py-8 dark:bg-zinc-900 bg-zinc-50 flex justify-between items-center px-16">
        <div className="flex gap-x-4 items-center">
          <div className="p-4 rounded-lg dark:bg-white bg-zinc-950 text-white dark:text-black">
            <Trophy size={40} />
          </div>
          <div>
            <p className="font-medium text-gray-700">best month</p>
            <p className="text-5xl font-semibold">{BestMonth.month}</p>
          </div>
        </div>
        <p className="text-6xl font-semibold">{BestMonth.revenue}$</p>
        <p
          className={clsx(
            "text-6xl font-semibold",
            BestMonth.change > 0
              ? "text-green-600"
              : BestMonth.change < 0 && "text-red-600",
          )}
        >
          {" "}
          {BestMonth.change > 0 ? `+${BestMonth.change}` : BestMonth.change}
          {(BestMonth.change > 0 || BestMonth.change < 0) && "%"}
        </p>
      </div>
    </section>
  );
};
export default MonthsInfo;

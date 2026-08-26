import clsx from "clsx";
import { monthlyRevenue } from "../../../mocks/monthlyRevenue";
import { calculatePercantageChanges } from "../../../utils/calculatePercantageChanges";
import { Trophy, TrendingDown, TrendingUp } from "lucide-react";
import { getBestMonth } from "../../../utils/calculateBestMonth";

const MonthsInfo = () => {
  const monthlyRevenueWithChanges = calculatePercantageChanges(monthlyRevenue);
  const BestMonth = getBestMonth(monthlyRevenueWithChanges);

  return (
    <section className="flex-1 space-y-4">
      <div className="rounded-2xl overflow-hidden border border-gray-100 dark:border-zinc-800">
        <ul className="grid grid-cols-3 font-semibold text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-zinc-900 px-8 py-3">
          <li className="text-left">Month</li>
          <li className="text-center">Revenue</li>
          <li className="text-right">Changes</li>
        </ul>
        <div className="divide-y divide-gray-100 dark:divide-zinc-800">
          {monthlyRevenueWithChanges.map(({ revenue, month, change }) => (
            <ul
              key={month}
              className="grid grid-cols-3 px-8 py-3.5 font-medium hover:bg-gray-50 dark:hover:bg-zinc-900/60 transition-colors"
            >
              <li className="text-left">{month}</li>
              <li className="text-center">{revenue}$</li>
              <li
                className={clsx(
                  "flex items-center justify-end gap-x-1 font-semibold",
                  change > 0 && "text-green-600",
                  change < 0 && "text-red-600",
                  change === 0 && "text-gray-400",
                )}
              >
                {change > 0 && <TrendingUp size={16} />}
                {change < 0 && <TrendingDown size={16} />}
                {change > 0 ? `+${change}` : change}
                {change !== 0 && "%"}
              </li>
            </ul>
          ))}
        </div>
      </div>

      <div className="rounded-2xl py-6 px-6 md:px-10 dark:bg-zinc-900 bg-gray-50 border border-gray-100 dark:border-zinc-800 flex flex-wrap justify-between items-center gap-6">
        <div className="flex gap-x-4 items-center">
          <div className="p-3.5 rounded-xl bg-amber-100 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400">
            <Trophy size={32} />
          </div>
          <div>
            <p className="font-medium text-gray-500 dark:text-gray-400 text-sm">
              Best Month
            </p>
            <p className="text-3xl font-bold">{BestMonth.month}</p>
          </div>
        </div>

        <p className="text-4xl font-bold">{BestMonth.revenue}$</p>

        <p
          className={clsx(
            "flex items-center gap-x-1.5 text-4xl font-bold",
            BestMonth.change > 0 && "text-green-600",
            BestMonth.change < 0 && "text-red-600",
            BestMonth.change === 0 && "text-gray-400",
          )}
        >
          {BestMonth.change > 0 && <TrendingUp size={28} />}
          {BestMonth.change < 0 && <TrendingDown size={28} />}
          {BestMonth.change > 0 ? `+${BestMonth.change}` : BestMonth.change}
          {BestMonth.change !== 0 && "%"}
        </p>
      </div>
    </section>
  );
};
export default MonthsInfo;

import {
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Line,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";
import { monthlyRevenue } from "../../mocks/monthlyRevenue";
import { Divide } from "lucide-react";
import clsx from "clsx";
const MonthlyRevenueChart = ({ chartType, switchChartMode }) => {
  return (
    <section className="w-[50%] space-y-5">
      <div className="space-x-3 *:rounded-xl *:px-6 *:py-1 font-semibold ml-14 *:cursor-pointer">
        <button name="line" onClick={switchChartMode} className={clsx(chartType === "line" ? "bg-blue-600 text-white" : "dark:bg-zinc-900 bg-gray-50 dark:text-white text-black")}>Line</button>
        <button name="bar" onClick={switchChartMode} className={clsx(chartType === "bar" ? "bg-blue-600 text-white" : "dark:bg-zinc-900 dark:text-white bg-gray-50")}>Bar</button>
      </div>
      <ResponsiveContainer height={600}>
        {chartType === "bar" ? (
          <BarChart data={monthlyRevenue}>
            <XAxis dataKey="month" />
            <YAxis />
            <Bar dataKey="revenue" fill="#155dfc" />
          </BarChart>
        ) : (
          <LineChart data={monthlyRevenue}>
            <CartesianGrid stroke="#aaa" strokeDasharray="10 10" />
            <Line dataKey="revenue" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip
              content={({ payload }) => {
                return (
                  <div className="dark:bg-gray-50 dark:text-gray-800 bg-zinc-950 text-gray-50 p-4 rounded-lg">
                    <p>
                      {payload[0]?.name} in {payload[0]?.payload?.month} :{" "}
                      {payload[0]?.value}
                    </p>
                  </div>
                );
              }}
            />
          </LineChart>
        )}
      </ResponsiveContainer>
    </section>
  );
};
export default MonthlyRevenueChart;

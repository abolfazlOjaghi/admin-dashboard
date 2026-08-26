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
import { CHART_COLOR } from "../../data/constans";
import clsx from "clsx";
const ChartTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-zinc-950 dark:bg-gray-50 text-gray-50 dark:text-gray-800 px-4 py-2.5 rounded-xl shadow-lg text-sm font-medium">
      <p className="text-gray-400 dark:text-gray-500 text-xs mb-0.5">
        {payload[0]?.payload?.month}
      </p>
      <p>Revenue: {payload[0]?.value}$</p>
    </div>
  );
};

const MonthlyRevenueChart = ({ chartType, switchChartMode }) => {
  return (
    <section className="w-[50%] space-y-5">
      <div className="space-x-3 *:rounded-xl *:px-6 *:py-1 font-semibold ml-14 *:cursor-pointer">
        <button
          name="line"
          onClick={switchChartMode}
          className={clsx(
            chartType === "line"
              ? "bg-blue-600 text-white"
              : "dark:bg-zinc-900 bg-gray-50 dark:text-white text-black",
          )}
        >
          Line
        </button>
        <button
          name="bar"
          onClick={switchChartMode}
          className={clsx(
            chartType === "bar"
              ? "bg-blue-600 text-white"
              : "dark:bg-zinc-900 dark:text-white bg-gray-50",
          )}
        >
          Bar
        </button>
      </div>

      <ResponsiveContainer height={600}>
        {chartType === "bar" ? (
          <BarChart data={monthlyRevenue}>
            <CartesianGrid
              vertical={false}
              stroke="#8884d8"
              strokeOpacity={0.15}
            />
            <XAxis dataKey="month" tickLine={false} axisLine={false} />
            <YAxis tickLine={false} axisLine={false} />
            <Tooltip
              content={<ChartTooltip />}
              cursor={{ fill: CHART_COLOR, opacity: 0.08 }}
            />
            <Bar dataKey="revenue" fill={CHART_COLOR} radius={[6, 6, 0, 0]} />
          </BarChart>
        ) : (
          <LineChart data={monthlyRevenue}>
            <CartesianGrid strokeDasharray="6 10" strokeOpacity={0.15} />
            <XAxis dataKey="month" tickLine={false} axisLine={false} />
            <YAxis tickLine={false} axisLine={false} />
            <Tooltip
              content={<ChartTooltip />}
              cursor={{ stroke: CHART_COLOR, strokeOpacity: 0.3 }}
            />
            <Line
              dataKey="revenue"
              stroke={CHART_COLOR}
              strokeWidth={3}
              dot={{ fill: CHART_COLOR, r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        )}
      </ResponsiveContainer>
    </section>
  );
};
export default MonthlyRevenueChart;

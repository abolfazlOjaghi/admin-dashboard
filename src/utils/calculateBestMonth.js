export const getBestMonth = (monthlyRevenue) => {
  return monthlyRevenue.reduce((bestMonth, currentMonth) => {
    return currentMonth.revenue > bestMonth.revenue
      ? currentMonth
      : bestMonth;
  });
};
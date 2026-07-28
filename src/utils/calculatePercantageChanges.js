export const calculatePercantageChanges = (monthlyRevenue) => {
    return monthlyRevenue.map((month, index) => {
        if (index === 0) {
            return {
                ...month,
                change : "-"
            }
        }
        const prevRevenue = monthlyRevenue[index - 1].revenue
        return {
            ...month,
            change : (((month.revenue - prevRevenue) / prevRevenue) * 100).toFixed(1)
        }
    })
}

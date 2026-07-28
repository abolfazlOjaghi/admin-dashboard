export const getProductHighlights = (products = []) => {
  if (!products.length) return [];
  const bestRating = products.reduce((best, current) => {
    return current.rating > best.rating ? {
        ...current,
        text : "Best rating",
        color : "bg-blue-600"
    } : {
        ...best,
        text : "Best rating",
        color : "bg-blue-600"
    };
  });
  const worstRating = products.reduce((worst, current) => {
    return current.rating < worst.rating ? {...current, text : "worst rating", color : "bg-purple-600"} : {...worst, text : "worst rating", color : "bg-purple-600"};
  });
  const mostExpensive = products.reduce((expensive, current) => {
    return current.price > expensive.price ? {...current, text : "most expensive", color : "bg-red-600"} : {...expensive, text : "most expensive", color : "bg-red-600"};
  });
  const cheapest = products.reduce((cheap, current) => {
    return current.price < cheap.price ? {...current, text : "cheapest", color : "bg-yellow-600"} : {...cheap, text : "cheapest", color : "bg-yellow-600"};
  });
  return [bestRating, worstRating, mostExpensive, cheapest];
};

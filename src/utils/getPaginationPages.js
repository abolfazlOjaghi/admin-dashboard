export const getPaginationPages = (current, total) => {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  } else if (current <= 4) {
    return [1, 2, 3, 4, 5, "...", total];
  } else if (current >= total - 3) {
    return [1, "...", total - 4, total - 3, total - 2, total - 1, total];
  } else {
    return [1, "...", current - 1, current, current + 1, "...", total];
  }
};

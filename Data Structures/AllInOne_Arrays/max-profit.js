import { isMainModule } from "../utils/is-main-module.js";

const maxProfit = (prices) => {
  if (!Array.isArray(prices)) {
    return -1;
  }

  let minPrice = prices[0]; // since you bought at the first day
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];
    minPrice = Math.min(minPrice, currentPrice);

    const potentialProfit = currentPrice - minPrice;
    maxProfit = Math.max(maxProfit, potentialProfit);
  }

  return maxProfit;
};e

if (isMainModule(import.meta.url)) {
  console.log("Maximum profit:", maxProfit([7, 1, 5, 3, 6, 4]));
}

export const convertToUSD = (price) =>
  Number(price).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

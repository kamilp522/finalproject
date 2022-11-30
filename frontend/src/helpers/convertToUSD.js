export const convertToUSD = (number) =>
  number.toLocaleString("en-US", { style: "currency", currency: "USD" });

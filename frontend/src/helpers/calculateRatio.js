export const calculateRatio = (data) => {
  const copy = structuredClone(data);
  const ratioArr = [];

  for (let i = 0; i < copy.long.length; i++) {
    const ratio = copy.long[i][0] / copy.short[i][0];
    ratioArr.push(+ratio.toFixed(3));
  }

  return ratioArr;
};

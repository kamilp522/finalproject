export const optionsAdjustMinValue = (options, data) => {
  const min = Math.min(...data.datasets[0].data);
  const max = Math.max(...data.datasets[0].data);

  return {
    ...options,
    scales: {
      ...options.scales,
      y: {
        ...options.scales.y,

        // min value on y axis is the difference
        // beetween min value and 5% of (min, max) range
        // thanks to that min value is always adjusted
        // to current range of the chart
        min: min - (max - min) * 0.05,
      },
    },
  };
};

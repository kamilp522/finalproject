export const optionsAdjustMinValue = (options, data) => {
  const copy_options = structuredClone(options);
  const copy_data = structuredClone(data);

  const min = Math.min(...copy_data.datasets[0].data);
  const max = Math.max(...copy_data.datasets[0].data);

  let yAxisMin;

  if (max - min > min * 0.2) {
    yAxisMin = Math.floor(Math.min(...copy_data.datasets[0].data) * 0.96);
  }

  return {
    ...copy_options,
    scales: {
      ...copy_options.scales,
      y: {
        ...copy_options.scales.y,
        min: yAxisMin,
      },
    },
  };
};

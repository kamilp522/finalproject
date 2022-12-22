import React from "react";
import { useState, useEffect } from "react";

import PropTypes from "prop-types";

import * as colors from "../variables/colors";
import { chartOptionsAdjustMinValue } from "../../helpers/chartOptionsAdjustMinValue";

import timeseriesService from "../../services/timeseries";

import { setMessageAndError } from "../../helpers/setMessageAndError";

import {
  ChartContainer,
  ChartH3,
  ChartText,
  BarChart,
  LineChart,
  ChartButtonsWrapper,
  ChartTimeButton,
  Select,
} from "./ChartElements";
import { useDispatch } from "react-redux";

const Chart = ({
  title,
  chartDescription,
  periods,
  options,
  data,
  type,
  chartInterval,
  setChartInterval,
  currentSymbol,
  isRatio,
}) => {
  const [currentData, setCurrentData] = useState(data);

  const dispatch = useDispatch();

  const getLastX = (x) => {
    const copy = structuredClone(data);

    const labels = copy.labels.splice(Number(`-${x}`));
    const values = copy.datasets[0].data.splice(Number(`-${x}`));

    setCurrentData({
      labels: labels,
      datasets: [{ data: values, backgroundColor: colors.clr_violet_800 }],
    });
  };

  useEffect(() => {
    const changeInterval = async () => {
      if (!currentSymbol) return;

      let timeseries;

      try {
        timeseries = await timeseriesService.getTimeseriesData({
          symbol: currentSymbol,
          chartInterval,
        });
      } catch (exception) {
        const errorMessage = exception.response.data.error;
        setMessageAndError(dispatch, `${errorMessage}`, true);
        return;
      }

      setCurrentData({
        labels: timeseries.labels,
        datasets: [
          {
            data: timeseries.values,
            backgroundColor: colors.clr_very_dark_blue_500,
            borderColor: colors.clr_violet_400,
          },
        ],
      });
    };
    changeInterval();
  }, [chartInterval]);

  return (
    <ChartContainer>
      {title && <ChartH3 tabIndex="0">{title}</ChartH3>}
      {chartDescription && (
        <ChartText tabIndex="0">{chartDescription}</ChartText>
      )}
      <ChartButtonsWrapper>
        {type === "bar" && !isRatio && (
          <>
            <ChartTimeButton onClick={() => setCurrentData(data)}>
              {`24 ${periods}`}
            </ChartTimeButton>
            <ChartTimeButton onClick={() => getLastX(12)}>
              {`12 ${periods}`}
            </ChartTimeButton>
            <ChartTimeButton onClick={() => getLastX(6)}>
              {`6 ${periods}`}
            </ChartTimeButton>
          </>
        )}
        {chartInterval && (
          <Select
            aria-label="select interval"
            name="interval"
            id="line-chart-interval"
            defaultValue={chartInterval}
            onChange={({ target }) => {
              setChartInterval(target.value);
            }}
          >
            <option value="1min">1 min</option>
            <option value="5min">5 min</option>
            <option value="15min">15 min</option>
            <option value="30min">30 min</option>
            <option value="1h">1 h</option>
            <option value="2h">2 h</option>
            <option value="4h">4 h</option>
            <option value="1day">1 day</option>
            <option value="1week">1 week</option>
            <option value="1month">1 month</option>
          </Select>
        )}
      </ChartButtonsWrapper>
      {type === "bar" && (
        <BarChart
          tabIndex="0"
          aria-label="chart"
          className="bar-chart"
          options={chartOptionsAdjustMinValue(options, currentData)}
          data={currentData}
        />
      )}
      {type === "line" && (
        <LineChart
          tabIndex="0"
          aria-label="chart"
          className="line-chart"
          options={chartOptionsAdjustMinValue(options, currentData)}
          data={currentData}
        />
      )}
    </ChartContainer>
  );
};

Chart.propTypes = {
  title: PropTypes.string,
  chartDescription: PropTypes.string,
  periods: PropTypes.string,
  options: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  chartInterval: PropTypes.string,
  setChartInterval: PropTypes.func,
  currentSymbol: PropTypes.string,
  isRatio: PropTypes.bool,
};

export default Chart;

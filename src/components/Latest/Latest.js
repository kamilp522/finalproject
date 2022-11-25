import React, { useEffect, useState } from "react";
import { LatestContainer, LatestH2 } from "./LatestElements";

import * as colors from "../variables/colors";
import IndicatorChart from "./IndicatorChart/IndicatorChart";
import {
  options,
  getChartParams,
  getDataMPMI,
  getDataSPMI,
} from "../Latest/chart_data/chart_data";

const Latest = () => {
  const [dataMPMI, setDataMPMI] = useState({ labels: null, datasets: null });
  const [dataSPMI, setDataSPMI] = useState({ labels: null, datasets: null });

  useEffect(() => {
    getChartParams(getDataMPMI).then((response) => {
      setDataMPMI({
        labels: response.labels,
        datasets: [
          { data: response.values, backgroundColor: colors.clr_violet_800 },
        ],
      });
    });
  }, []);

  useEffect(() => {
    getChartParams(getDataSPMI).then((response) => {
      setDataSPMI({
        labels: response.labels,
        datasets: [
          { data: response.values, backgroundColor: colors.clr_violet_800 },
        ],
      });
    });
  }, []);

  return (
    <LatestContainer>
      <LatestH2>Latest Economic Data</LatestH2>

      {dataMPMI.datasets ? (
        <IndicatorChart
          title={"ISM Manufacturing PMI"}
          options={options}
          data={dataMPMI}
        />
      ) : (
        <canvas></canvas>
      )}

      {dataSPMI.datasets ? (
        <IndicatorChart
          title={"ISM Non-Manufacturing PMI"}
          options={options}
          data={dataSPMI}
        />
      ) : (
        <canvas></canvas>
      )}
    </LatestContainer>
  );
};

export default Latest;

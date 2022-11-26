import React, { useEffect, useState } from "react";
import { LatestContainer, LatestH2 } from "./LatestElements";

import * as colors from "../variables/colors";
import IndicatorChart from "./IndicatorChart/IndicatorChart";
import {
  getChartParams,
  getDataManPMI,
  getDataNonManPMI,
  getDataMichiganSentiment,
} from "../Latest/chart_data/chart_data";
import { options } from "./chart_data/chart_settings";
import { latest_content } from "./content";

const Latest = () => {
  const [dataMPMI, setDataMPMI] = useState({ labels: null, datasets: null });
  const [dataSPMI, setDataSPMI] = useState({ labels: null, datasets: null });
  const [dataMichigan, setDataMichigan] = useState({
    labels: null,
    datasets: null,
  });

  useEffect(() => {
    getChartParams(getDataManPMI).then((response) => {
      setDataMPMI({
        labels: response.labels,
        datasets: [
          { data: response.values, backgroundColor: colors.clr_violet_800 },
        ],
      });
    });
  }, []);

  useEffect(() => {
    getChartParams(getDataNonManPMI).then((response) => {
      setDataSPMI({
        labels: response.labels,
        datasets: [
          { data: response.values, backgroundColor: colors.clr_violet_800 },
        ],
      });
    });
  }, []);

  useEffect(() => {
    getChartParams(getDataMichiganSentiment).then((response) => {
      setDataMichigan({
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
          title={latest_content.manufacturing_pmi.title}
          interpretation={latest_content.manufacturing_pmi.interpretation}
          options={options}
          data={dataMPMI}
        />
      ) : (
        <div></div>
      )}

      {dataSPMI.datasets ? (
        <IndicatorChart
          title={latest_content.non_manufacturing_pmi.title}
          interpretation={latest_content.non_manufacturing_pmi.interpretation}
          options={options}
          data={dataSPMI}
        />
      ) : (
        <div></div>
      )}

      {dataMichigan.datasets ? (
        <IndicatorChart
          title={latest_content.michigan_sentiment.title}
          interpretation={latest_content.michigan_sentiment.interpretation}
          options={options}
          data={dataMichigan}
        />
      ) : (
        <div></div>
      )}
    </LatestContainer>
  );
};

export default Latest;

import React, { useEffect, useState } from "react";
import { LatestH2 } from "./LatestElements";
import { Wrapper } from "../UI/Wrapper/Wrapper";

import * as colors from "../variables/colors";

import dbApis from "../../services/chart_data/chart_data";

import IndicatorChart from "./IndicatorChart/IndicatorChart";
import { options } from "../../services/chart_data/chart_options";
import { latest_content } from "./content";

const Latest = () => {
  const [dataMPMI, setDataMPMI] = useState({ labels: null, datasets: null });
  const [dataSPMI, setDataSPMI] = useState({ labels: null, datasets: null });
  const [dataMichigan, setDataMichigan] = useState({
    labels: null,
    datasets: null,
  });

  useEffect(() => {
    dbApis.getChartParams(dbApis.getDataManPMI).then((response) => {
      setDataMPMI({
        labels: response.labels,
        datasets: [
          { data: response.values, backgroundColor: colors.clr_violet_800 },
        ],
      });
    });
  }, []);

  useEffect(() => {
    dbApis.getChartParams(dbApis.getDataNonManPMI).then((response) => {
      setDataSPMI({
        labels: response.labels,
        datasets: [
          { data: response.values, backgroundColor: colors.clr_violet_800 },
        ],
      });
    });
  }, []);

  useEffect(() => {
    dbApis.getChartParams(dbApis.getDataMichiganSentiment).then((response) => {
      setDataMichigan({
        labels: response.labels,
        datasets: [
          { data: response.values, backgroundColor: colors.clr_violet_800 },
        ],
      });
    });
  }, []);

  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default Latest;

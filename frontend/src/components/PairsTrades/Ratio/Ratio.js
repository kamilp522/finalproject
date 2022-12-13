import React from "react";
import { useState, useEffect } from "react";

import * as colors from "../../variables/colors";

import { Wrapper } from "../../UI/Wrapper/Wrapper";
import { H2, H3, Description } from "../../UI/Text/Text";
import { RatioContainer } from "./RatioElements";

import Chart from "../../Chart/Chart";
import { options } from "../../Chart/chart_options";

import { chartOptionsAdjustMinValue } from "../../../helpers/chartOptionsAdjustMinValue";

import { ratioChartContent } from "../content";

import MoonLoader from "react-spinners/MoonLoader";

import RatioForm from "../../Forms/RatioForm";

const Ratio = () => {
  const [typedRatioLongSymbol, setTypedRatioLongSymbol] = useState("");
  const [typedRatioShortSymbol, setTypedRatioShortSymbol] = useState("");
  const [currentRatioLongSymbol, setCurrentRatioLongSymbol] = useState("");
  const [currentRatioShortSymbol, setCurrentRatioShortSymbol] = useState("");
  const [chartData, setChartData] = useState({ labels: null, datasets: null });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (chartData.datasets) setLoading(false);
  }, [chartData]);

  return (
    <Wrapper>
      <H2>Ratio Chart</H2>
      <Description>{ratioChartContent.description}</Description>
      <RatioForm
        typedRatioLongSymbol={typedRatioLongSymbol}
        setTypedRatioLongSymbol={setTypedRatioLongSymbol}
        typedRatioShortSymbol={typedRatioShortSymbol}
        setTypedRatioShortSymbol={setTypedRatioShortSymbol}
        setCurrentRatioLongSymbol={setCurrentRatioLongSymbol}
        setCurrentRatioShortSymbol={setCurrentRatioShortSymbol}
        setChartData={setChartData}
        setLoading={setLoading}
      />
      <RatioContainer>
        {loading && (
          <MoonLoader
            loading={loading}
            size={50}
            color={colors.clr_violet_full}
          />
        )}
        {chartData.datasets && (
          <Chart
            title={`${currentRatioLongSymbol} / ${currentRatioShortSymbol}`}
            options={chartOptionsAdjustMinValue(options, chartData)}
            data={chartData}
            type="bar"
            isRatio={true}
          />
        )}
      </RatioContainer>
    </Wrapper>
  );
};

export default Ratio;

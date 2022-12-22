import React from "react";
import { useState, useEffect } from "react";

import * as colors from "../../variables/colors";

import { Wrapper } from "../../UI/Wrapper/Wrapper";
import { H2, Description } from "../../UI/Text/Text";
import { LoaderContainer } from "../../UI/LoaderContainer/LoaderContainer";
import { RatioChartContainer } from "./RatioElements";
import RatioForm from "../../Forms/RatioForm";

import Chart from "../../Chart/Chart";
import { options } from "../../Chart/chart_options";

import { chartOptionsAdjustMinValue } from "../../../helpers/chartOptionsAdjustMinValue";

import { ratioChartContent } from "../content";

import MoonLoader from "react-spinners/MoonLoader";

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
      <H2 tabIndex="0">Ratio Chart</H2>
      <Description tabIndex="0">{ratioChartContent.description}</Description>
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
      {loading && (
        <LoaderContainer>
          <MoonLoader
            loading={loading}
            size={50}
            color={colors.clr_violet_full}
          />
        </LoaderContainer>
      )}
      {chartData.datasets && (
        <RatioChartContainer>
          <Chart
            title={`${currentRatioLongSymbol} / ${currentRatioShortSymbol}`}
            options={chartOptionsAdjustMinValue(options, chartData)}
            data={chartData}
            type="bar"
            isRatio={true}
          />
        </RatioChartContainer>
      )}
    </Wrapper>
  );
};

export default Ratio;

import React from "react";
import { useState, useEffect } from "react";

import * as colors from "../variables/colors";
import { chartOptionsAdjustMinValue } from "../../helpers/chartOptionsAdjustMinValue";

import indicatorService from "../../services/indicators";

import { setMessageAndError } from "../../helpers/setMessageAndError";
import { useDispatch } from "react-redux";

import Chart from "../Chart/Chart";
import { options } from "../Chart/chart_options";
import { latestContent } from "./content";

import { Indicator, IndicatorsContainer } from "./IndicatorsElements";

import { Container } from "../UI/Container/Container";
import { Description, H2 } from "../UI/Text/Text";
import { Wrapper } from "../UI/Wrapper/Wrapper";
import { LoaderContainer } from "../UI/LoaderContainer/LoaderContainer";

import MoonLoader from "react-spinners/MoonLoader";

const Indicators = () => {
  const dispatch = useDispatch();

  const [dataMPMI, setDataMPMI] = useState({ labels: null, datasets: null });
  const [dataSPMI, setDataSPMI] = useState({ labels: null, datasets: null });
  const [dataMichigan, setDataMichigan] = useState({
    labels: null,
    datasets: null,
  });
  const [dataTreasury10Yield, setDataTreasury10Yield] = useState({
    labels: null,
    datasets: null,
  });
  const [dataGDP, setDataGDP] = useState({ labels: null, datasets: null });
  const [dataPayrolls, setDataPayrolls] = useState({
    labels: null,
    datasets: null,
  });

  useEffect(() => {
    indicatorService
      .getDataManPMI()
      .then((response) => {
        setDataMPMI({
          labels: response.labels,
          datasets: [
            { data: response.values, backgroundColor: colors.clr_violet_800 },
          ],
        });
      })
      .catch((error) => {
        setMessageAndError(dispatch, `${error}`, true);
      });
  }, []);

  useEffect(() => {
    indicatorService
      .getDataNonManPMI()
      .then((response) => {
        setDataSPMI({
          labels: response.labels,
          datasets: [
            { data: response.values, backgroundColor: colors.clr_violet_800 },
          ],
        });
      })
      .catch((error) => {
        setMessageAndError(dispatch, `${error}`, true);
      });
  }, []);

  useEffect(() => {
    indicatorService
      .getDataMichiganSentiment()
      .then((response) => {
        setDataMichigan({
          labels: response.labels,
          datasets: [
            { data: response.values, backgroundColor: colors.clr_violet_800 },
          ],
        });
      })
      .catch((error) => {
        setMessageAndError(dispatch, `${error}`, true);
      });
  }, []);

  useEffect(() => {
    indicatorService
      .getDataTreasury10Yield()
      .then((response) => {
        setDataTreasury10Yield({
          labels: response.labels,
          datasets: [
            { data: response.values, backgroundColor: colors.clr_violet_800 },
          ],
        });
      })
      .catch((error) => {
        setMessageAndError(dispatch, `${error}`, true);
      });
  }, []);

  useEffect(() => {
    indicatorService
      .getDataGDP()
      .then((response) => {
        setDataGDP({
          labels: response.labels,
          datasets: [
            { data: response.values, backgroundColor: colors.clr_violet_800 },
          ],
        });
      })
      .catch((error) => {
        setMessageAndError(dispatch, `${error}`, true);
      });
  }, []);

  useEffect(() => {
    indicatorService
      .getDataPayrolls()
      .then((response) => {
        setDataPayrolls({
          labels: response.labels,
          datasets: [
            { data: response.values, backgroundColor: colors.clr_violet_800 },
          ],
        });
      })
      .catch((error) => {
        setMessageAndError(dispatch, `${error}`, true);
      });
  }, []);

  return (
    <Wrapper>
      <Container>
        <H2>Leading Indicators</H2>
        <Description>{latestContent.leading}</Description>
        <IndicatorsContainer>
          <Indicator>
            {dataMPMI.datasets ? (
              <Chart
                title={latestContent.manufacturingPmi.title}
                chartDescription={
                  latestContent.manufacturingPmi.chartDescription
                }
                periods={latestContent.manufacturingPmi.periods}
                options={chartOptionsAdjustMinValue(options, dataMPMI)}
                data={dataMPMI}
                type="bar"
              />
            ) : (
              <LoaderContainer>
                <MoonLoader
                  loading={true}
                  size={50}
                  color={colors.clr_violet_full}
                />
              </LoaderContainer>
            )}
          </Indicator>
          <Indicator>
            {dataSPMI.datasets ? (
              <Chart
                title={latestContent.nonManufacturingPmi.title}
                chartDescription={
                  latestContent.nonManufacturingPmi.chartDescription
                }
                periods={latestContent.nonManufacturingPmi.periods}
                options={chartOptionsAdjustMinValue(options, dataSPMI)}
                data={dataSPMI}
                type="bar"
              />
            ) : (
              <LoaderContainer>
                <MoonLoader
                  loading={true}
                  size={50}
                  color={colors.clr_violet_full}
                />
              </LoaderContainer>
            )}
          </Indicator>
          <Indicator>
            {dataMichigan.datasets ? (
              <Chart
                title={latestContent.michiganSentiment.title}
                chartDescription={
                  latestContent.michiganSentiment.chartDescription
                }
                periods={latestContent.michiganSentiment.periods}
                options={chartOptionsAdjustMinValue(options, dataMichigan)}
                data={dataMichigan}
                type="bar"
              />
            ) : (
              <LoaderContainer>
                <MoonLoader
                  loading={true}
                  size={50}
                  color={colors.clr_violet_full}
                />
              </LoaderContainer>
            )}
          </Indicator>
          <Indicator>
            {dataTreasury10Yield.datasets ? (
              <Chart
                title={latestContent.treasury10Yield.title}
                chartDescription={
                  latestContent.treasury10Yield.chartDescription
                }
                periods={latestContent.treasury10Yield.periods}
                options={chartOptionsAdjustMinValue(
                  options,
                  dataTreasury10Yield
                )}
                data={dataTreasury10Yield}
                type="bar"
              />
            ) : (
              <LoaderContainer>
                <MoonLoader
                  loading={true}
                  size={50}
                  color={colors.clr_violet_full}
                />
              </LoaderContainer>
            )}
          </Indicator>
        </IndicatorsContainer>

        <H2>Coincident Indicators</H2>
        <Description>{latestContent.coincident}</Description>

        <IndicatorsContainer>
          <Indicator>
            {dataGDP.datasets ? (
              <Chart
                title={latestContent.gdp.title}
                chartDescription={latestContent.gdp.chartDescription}
                periods={latestContent.gdp.periods}
                options={chartOptionsAdjustMinValue(options, dataGDP)}
                data={dataGDP}
                type="bar"
              />
            ) : (
              <LoaderContainer>
                <MoonLoader
                  loading={true}
                  size={50}
                  color={colors.clr_violet_full}
                />
              </LoaderContainer>
            )}
          </Indicator>
          <Indicator>
            {dataPayrolls.datasets ? (
              <Chart
                title={latestContent.payroll.title}
                chartDescription={latestContent.payroll.chartDescription}
                periods={latestContent.payroll.periods}
                options={chartOptionsAdjustMinValue(options, dataPayrolls)}
                data={dataPayrolls}
                type="bar"
              />
            ) : (
              <LoaderContainer>
                <MoonLoader
                  loading={true}
                  size={50}
                  color={colors.clr_violet_full}
                />
              </LoaderContainer>
            )}
          </Indicator>
        </IndicatorsContainer>
      </Container>
    </Wrapper>
  );
};

export default Indicators;

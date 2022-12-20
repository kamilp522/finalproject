import React from "react";
import { useState, useEffect } from "react";

import * as colors from "../variables/colors";
import { chartOptionsAdjustMinValue } from "../../helpers/chartOptionsAdjustMinValue";

import indicatorService from "../../services/indicators";

import MoonLoader from "react-spinners/MoonLoader";
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
    const updateDataMPMI = async () => {
      try {
        const response = await indicatorService.getDataMPMI();
        setDataMPMI({
          labels: response.labels,
          datasets: [
            {
              data: response.values,
              backgroundColor: colors.clr_violet_800,
              hoverBackgroundColor: colors.clr_violet_500,
            },
          ],
        });
      } catch (exception) {
        const errorMessage = exception.response.data.error;
        setMessageAndError(dispatch, `${errorMessage}`, true);
      }
    };
    updateDataMPMI();
  }, []);

  useEffect(() => {
    const updateDataSPMI = async () => {
      try {
        const response = await indicatorService.getDataSPMI();
        setDataSPMI({
          labels: response.labels,
          datasets: [
            {
              data: response.values,
              backgroundColor: colors.clr_violet_800,
              hoverBackgroundColor: colors.clr_violet_500,
            },
          ],
        });
      } catch (exception) {
        const errorMessage = exception.response.data.error;
        setMessageAndError(dispatch, `${errorMessage}`, true);
      }
    };
    updateDataSPMI();
  }, []);

  useEffect(() => {
    const updateDataMichigan = async () => {
      try {
        const response = await indicatorService.getDataMichigan();
        setDataMichigan({
          labels: response.labels,
          datasets: [
            {
              data: response.values,
              backgroundColor: colors.clr_violet_800,
              hoverBackgroundColor: colors.clr_violet_500,
            },
          ],
        });
      } catch (exception) {
        const errorMessage = exception.response.data.error;
        setMessageAndError(dispatch, `${errorMessage}`, true);
      }
    };
    updateDataMichigan();
  }, []);

  useEffect(() => {
    const updateTreasuryData = async () => {
      try {
        const response = await indicatorService.getDataTreasury10Yield();
        setDataTreasury10Yield({
          labels: response.labels,
          datasets: [
            {
              data: response.values,
              backgroundColor: colors.clr_violet_800,
              hoverBackgroundColor: colors.clr_violet_500,
            },
          ],
        });
      } catch (exception) {
        const errorMessage = exception.response.data.error;
        setMessageAndError(dispatch, `${errorMessage}`, true);
      }
    };
    updateTreasuryData();
  }, []);

  useEffect(() => {
    const updateGDPData = async () => {
      try {
        const response = await indicatorService.getDataGDP();
        setDataGDP({
          labels: response.labels,
          datasets: [
            {
              data: response.values,
              backgroundColor: colors.clr_violet_800,
              hoverBackgroundColor: colors.clr_violet_500,
            },
          ],
        });
      } catch (exception) {
        const errorMessage = exception.response.data.error;
        setMessageAndError(dispatch, `${errorMessage}`, true);
      }
    };
    updateGDPData();
  }, []);

  useEffect(() => {
    const updatePayrollsData = async () => {
      try {
        const response = await indicatorService.getDataPayrolls();
        setDataPayrolls({
          labels: response.labels,
          datasets: [
            {
              data: response.values,
              backgroundColor: colors.clr_violet_800,
              hoverBackgroundColor: colors.clr_violet_500,
            },
          ],
        });
      } catch (exception) {
        const errorMessage = exception.response.data.error;
        setMessageAndError(dispatch, `${errorMessage}`, true);
      }
    };
    updatePayrollsData();
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

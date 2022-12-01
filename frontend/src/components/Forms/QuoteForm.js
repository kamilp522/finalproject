import React from "react";

import * as colors from "../../components/variables/colors";

import quoteService from "../../services/quote";
import timeseriesService from "../../services/timeseries";

import { Form, Input, FormButtonWrapper } from "../UI/Forms/FormElements";
import { Button } from "../UI/Button/Button";

const QuoteForm = ({
  typedSymbol,
  setTypedSymbol,
  setQuote,
  setChartData,
  chartInterval,
  setCurrentSymbol,
}) => {
  const getQuote = async (event) => {
    event.preventDefault();

    setCurrentSymbol(typedSymbol);
    setChartData({ labels: null, datasets: null });
    setQuote(null);

    const symbol_input_value = document.getElementById("symbol-field").value;
    setTypedSymbol(symbol_input_value);

    try {
      const quote = await quoteService.getQuoteData({ symbol: typedSymbol });
      // const quote = {};
      setQuote(quote);

      const timeseries = await timeseriesService.getTimeseriesData({
        symbol: typedSymbol,
        chartInterval,
      });

      const timeseries_chart_data =
        timeseriesService.getTimeseriesChartParams(timeseries);

      setChartData({
        labels: timeseries_chart_data.labels,
        datasets: [
          {
            data: timeseries_chart_data.values,
            backgroundColor: colors.clr_very_dark_blue_500,
            borderColor: colors.clr_violet_400,
          },
        ],
      });

      setTypedSymbol("");
    } catch (exception) {
      setTypedSymbol("");
      console.log(exception);
    }
  };

  return (
    <Form onSubmit={getQuote}>
      <Input
        id="symbol-field"
        type="text"
        value={typedSymbol.toLocaleUpperCase()}
        onChange={({ target }) => setTypedSymbol(target.value)}
        placeholder="type symbol"
      />
      <FormButtonWrapper>
        <Button>Look up stock</Button>
      </FormButtonWrapper>
    </Form>
  );
};

export default QuoteForm;

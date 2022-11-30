import React from "react";

import quoteService from "../../services/quote";
import timeseriesService from "../../services/timeseries";

import { Form, Input, FormButtonWrapper } from "../UI/Forms/FormElements";
import { Button } from "../UI/Button/Button";

const QuoteForm = ({ symbol, setSymbol, setQuote, setChartData }) => {
  const getQuote = async (event) => {
    event.preventDefault();

    const typed_symbol = document.getElementById("symbol-field").value;
    setSymbol(typed_symbol);

    try {
      const quote = await quoteService.getQuoteData({ symbol });
      setQuote(quote);

      const timeseries = await timeseriesService.getTimeseriesData({ symbol });

      const timeseries_chart_data =
        timeseriesService.getTimeseriesChartParams(timeseries);

      setChartData(timeseries_chart_data);

      setSymbol("");
    } catch (exception) {
      setSymbol("");
      console.log(exception);
    }
  };

  return (
    <Form onSubmit={getQuote}>
      <Input
        id="symbol-field"
        type="text"
        value={symbol.toLocaleUpperCase()}
        onChange={({ target }) => setSymbol(target.value)}
        placeholder="type symbol"
      />
      <FormButtonWrapper>
        <Button>Look up stock</Button>
      </FormButtonWrapper>
    </Form>
  );
};

export default QuoteForm;

import React from "react";

import * as colors from "../../components/variables/colors";

import { setNotification } from "../../reducers/notificationReducer";

import quoteService from "../../services/quote";
import timeseriesService from "../../services/timeseries";

import { Form, Input, FormButtonWrapper } from "../UI/Forms/FormElements";
import { Button } from "../UI/Button/Button";
import { useDispatch } from "react-redux";

const QuoteForm = ({
  typedSymbol,
  setTypedSymbol,
  setQuote,
  setChartData,
  chartInterval,
  setCurrentSymbol,
}) => {
  const dispatch = useDispatch();

  const setMessageAndError = (message, error) => {
    dispatch(setNotification({ message, error }));
  };

  const getQuote = async (event) => {
    event.preventDefault();

    setCurrentSymbol(typedSymbol);
    setChartData({ labels: null, datasets: null });
    setQuote(null);

    const symbolInputValue = document.getElementById("quote-symbol").value;
    setTypedSymbol(symbolInputValue);

    try {
      const quote = await quoteService.getQuoteData({ symbol: typedSymbol });
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
            backgroundColor: colors.clr_violet_400,
            borderColor: colors.clr_violet_400,
          },
        ],
      });

      setTypedSymbol("");
    } catch (exception) {
      const errorMessage = exception.response.data.error;
      setMessageAndError(`${errorMessage}`, true);
      setTypedSymbol("");
    }
  };

  return (
    <Form onSubmit={getQuote}>
      <Input
        id="quote-symbol"
        type="text"
        value={typedSymbol}
        onChange={({ target }) =>
          setTypedSymbol(target.value.toLocaleUpperCase())
        }
        placeholder="type symbol"
      />
      <FormButtonWrapper>
        <Button id="quote-button">Look up stock</Button>
      </FormButtonWrapper>
    </Form>
  );
};

export default QuoteForm;

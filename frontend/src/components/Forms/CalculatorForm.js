import React from "react";

import calculatorService from "../../services/calculator";
import quoteService from "../../services/quote";

import { setNotification } from "../../reducers/notificationReducer";

import { parseDataForCalculatorTable } from "../../helpers/parseDataForCalculatorTable";

import { Form, Input, FormButtonWrapper } from "../UI/Forms/FormElements";
import { Button } from "../UI/Button/Button";
import { useDispatch } from "react-redux";

const CalculatorForm = ({
  capital,
  setCapital,
  typedCalculatorLongSymbol,
  setTypedCalculatorLongSymbol,
  typedCalculatorShortSymbol,
  setTypedCalculatorShortSymbol,
  setCurrentCalculatorLongSymbol,
  setCurrentCalculatorShortSymbol,
  typedIndexSymbol,
  setTypedIndexSymbol,
  setCurrentIndexSymbol,
  setTableData,
  setLoading,
}) => {
  const dispatch = useDispatch();

  const clearInput = () => {
    setCapital("");
    setTypedCalculatorLongSymbol("");
    setTypedCalculatorShortSymbol("");
    setTypedIndexSymbol("");
  };

  const setMessageAndError = (message, error) => {
    dispatch(setNotification({ message, error }));
  };

  const getPairTrade = async (event) => {
    event.preventDefault();

    setCurrentCalculatorLongSymbol(typedCalculatorLongSymbol);
    setCurrentCalculatorShortSymbol(typedCalculatorShortSymbol);
    setCurrentIndexSymbol(typedIndexSymbol);
    setTableData(null);
    setLoading(true);

    try {
      const pairTradeData = await calculatorService.getCalculatorData({
        capital,
        longSymbol: typedCalculatorLongSymbol,
        shortSymbol: typedCalculatorShortSymbol,
        indexSymbol: typedIndexSymbol,
      });

      const longQuote = await quoteService.getQuoteData({
        symbol: typedCalculatorLongSymbol,
      });
      const longPrice = longQuote.close;

      const shortQuote = await quoteService.getQuoteData({
        symbol: typedCalculatorShortSymbol,
      });
      const shortPrice = shortQuote.close;

      const parsedTableData = parseDataForCalculatorTable({
        ...pairTradeData,
        longPrice,
        shortPrice,
      });

      setTableData(parsedTableData);

      clearInput();
    } catch (exception) {
      const errorMessage = exception.response.data.error;
      setMessageAndError(`${errorMessage}`, true);
      setLoading(false);
      clearInput();
    }
  };

  return (
    <Form onSubmit={getPairTrade}>
      <Input
        id="calculator-capital"
        type="text"
        value={capital}
        onChange={({ target }) => setCapital(target.value)}
        placeholder="capital for trade in USD"
      />
      <Input
        id="calculator-long-symbol"
        type="text"
        value={typedCalculatorLongSymbol}
        onChange={({ target }) =>
          setTypedCalculatorLongSymbol(target.value.toLocaleUpperCase())
        }
        placeholder="long symbol"
      />
      <Input
        id="calculator-short-symbol"
        type="text"
        value={typedCalculatorShortSymbol}
        onChange={({ target }) =>
          setTypedCalculatorShortSymbol(target.value.toLocaleUpperCase())
        }
        placeholder="short symbol"
      />
      <Input
        id="calculator-index-symbol"
        type="text"
        value={typedIndexSymbol}
        onChange={({ target }) =>
          setTypedIndexSymbol(target.value.toLocaleUpperCase())
        }
        placeholder="index symbol"
      />
      <FormButtonWrapper>
        <Button id="calculator-button">calculate</Button>
      </FormButtonWrapper>
    </Form>
  );
};

export default CalculatorForm;

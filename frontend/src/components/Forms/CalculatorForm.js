import React from "react";

import PropTypes from "prop-types";

import calculatorService from "../../services/calculator";
import quoteService from "../../services/quote";

import { setMessageAndError } from "../../helpers/setMessageAndError";

import { parseDataForCalculatorTable } from "../../helpers/parseDataForCalculatorTable";

import {
  Form,
  Input,
  FormButtonWrapper,
  Label,
} from "../UI/Forms/FormElements";
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
      setMessageAndError(dispatch, `${errorMessage}`, true);
      setLoading(false);
      clearInput();
    }
  };

  return (
    <Form onSubmit={getPairTrade}>
      <Label>capital for trade: </Label>

      <Input
        id="calculator-capital"
        type="text"
        value={capital}
        onChange={({ target }) => setCapital(target.value)}
        placeholder="e.g. 10000"
      />
      <Label>long stock symbol: </Label>

      <Input
        id="calculator-long-symbol"
        type="text"
        value={typedCalculatorLongSymbol}
        onChange={({ target }) =>
          setTypedCalculatorLongSymbol(target.value.toLocaleUpperCase())
        }
        placeholder="e.g. GOOG"
      />
      <Label>short stock symbol: </Label>

      <Input
        id="calculator-short-symbol"
        type="text"
        value={typedCalculatorShortSymbol}
        onChange={({ target }) =>
          setTypedCalculatorShortSymbol(target.value.toLocaleUpperCase())
        }
        placeholder="e.g. AAPL"
      />
      <Label>index symbol: </Label>

      <Input
        id="calculator-index-symbol"
        type="text"
        value={typedIndexSymbol}
        onChange={({ target }) =>
          setTypedIndexSymbol(target.value.toLocaleUpperCase())
        }
        placeholder="e.g. GSPC for SP500"
      />
      <FormButtonWrapper>
        <Button id="calculator-button">calculate</Button>
      </FormButtonWrapper>
    </Form>
  );
};

CalculatorForm.propTypes = {
  capital: PropTypes.string.isRequired,
  setCapital: PropTypes.func.isRequired,
  typedCalculatorLongSymbol: PropTypes.string.isRequired,
  setTypedCalculatorLongSymbol: PropTypes.func.isRequired,
  typedCalculatorShortSymbol: PropTypes.string.isRequired,
  setTypedCalculatorShortSymbol: PropTypes.func.isRequired,
  setCurrentCalculatorLongSymbol: PropTypes.func.isRequired,
  setCurrentCalculatorShortSymbol: PropTypes.func.isRequired,
  typedIndexSymbol: PropTypes.string.isRequired,
  setTypedIndexSymbol: PropTypes.func.isRequired,
  setCurrentIndexSymbol: PropTypes.func.isRequired,
  setTableData: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
};

export default CalculatorForm;

import React from "react";

import quoteService from "../../services/quote";

import { convertToUSD } from "../../helpers/convertToUSD";

import { Form, Input, FormButtonWrapper } from "../UI/Forms/FormElements";
import { Button } from "../UI/Button/Button";

const QuoteForm = ({ symbol, setSymbol, setPrice, setSymbolField }) => {
  const getQuote = async (event) => {
    event.preventDefault();

    const typed_symbol = document.getElementById("symbol-field").value;
    setSymbol(typed_symbol);
    setSymbolField(typed_symbol);

    try {
      const quote = await quoteService.getQuoteData({ symbol });
      const price = Math.round(quote.values[0].open);

      setPrice(convertToUSD(price));
    } catch (exception) {
      setPrice("stock not found");
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

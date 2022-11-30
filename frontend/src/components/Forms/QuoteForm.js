import React from "react";

import quoteService from "../../services/quote";

import { Form, Input, FormButtonWrapper } from "../UI/Forms/FormElements";
import { Button } from "../UI/Button/Button";

const QuoteForm = ({ symbol, setSymbol, setQuote }) => {
  const getQuote = async (event) => {
    event.preventDefault();

    const typed_symbol = document.getElementById("symbol-field").value;
    setSymbol(typed_symbol);

    try {
      const quote = await quoteService.getQuoteData({ symbol });
      setQuote(quote);
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

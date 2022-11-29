import React from "react";

import quoteService from "../../services/quote";

import { Form, Input, FormButtonWrapper } from "../UI/Forms/FormElements";
import { Button } from "../UI/Button/Button";

const QuoteForm = ({ setQuote, setPrice }) => {
  const getQuote = async (event) => {
    event.preventDefault();

    const quote = document.getElementById("quote");
    setQuote(quote.value);

    try {
      const price = await quoteService.getQuoteData(quote.value);

      console.log(price);

      setPrice(price);
    } catch (exception) {
      console.log(exception);
    }
  };

  return (
    <Form onSubmit={getQuote}>
      <Input id="quote" type="text" placeholder="type symbol" />
      <FormButtonWrapper>
        <Button>Look up stock</Button>
      </FormButtonWrapper>
    </Form>
  );
};

export default QuoteForm;

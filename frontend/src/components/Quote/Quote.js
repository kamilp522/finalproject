import React from "react";
import { useState, useEffect } from "react";

import quoteService from "../../services/quote";

import { Wrapper } from "../UI/Wrapper/Wrapper";
import {
  Table,
  TableHead,
  TableBody,
  Head,
  Row,
  Data,
} from "../UI/Table/Table";
import QuoteForm from "../Forms/QuoteForm";

const Quote = () => {
  const [symbol, setSymbol] = useState("");
  const [price, setPrice] = useState(null);
  const [symbolField, setSymbolField] = useState("");

  return (
    <Wrapper>
      <QuoteForm
        symbol={symbol}
        setSymbol={setSymbol}
        setPrice={setPrice}
        setSymbolField={setSymbolField}
      />
      <Table>
        <TableHead>
          <Row>
            <Head>Symbol</Head>
            <Head>Last Price</Head>
          </Row>
        </TableHead>
        <TableBody>
          <Row>
            <Data>{symbolField.toLocaleUpperCase()}</Data>
            <Data>{price}</Data>
          </Row>
        </TableBody>
      </Table>
    </Wrapper>
  );
};

export default Quote;

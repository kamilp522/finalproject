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
  const [quote, setQuote] = useState("");
  const [price, setPrice] = useState(null);

  return (
    <Wrapper>
      <QuoteForm setQuote={setQuote} setPrice={setPrice} />
      {/* {quote && ( */}
      <Table>
        <TableHead>
          <Row>
            <Head>Symbol</Head>
            <Head>Last Price</Head>
            <Head>Time</Head>
          </Row>
        </TableHead>
        <TableBody>
          <Row>
            <Data>{quote}</Data>
            <Data></Data>
            <Data>Data2</Data>
          </Row>
        </TableBody>
      </Table>
      {/* )} */}
    </Wrapper>
  );
};

export default Quote;

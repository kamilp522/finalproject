import React from "react";
import { useState, useEffect } from "react";

import { convertToUSD } from "../../helpers/convertToUSD";

import { QuoteContainer } from "./QuoteElements";
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
  const [quote, setQuote] = useState(null);

  return (
    <Wrapper>
      <QuoteForm symbol={symbol} setSymbol={setSymbol} setQuote={setQuote} />
      <QuoteContainer>
        {quote && (
          <Table>
            <TableHead>
              <Row>
                <Head>Symbol</Head>
                <Head>Name</Head>
                <Head>Exchange</Head>
                <Head>Price</Head>
              </Row>
            </TableHead>
            <TableBody>
              <Row>
                <Data>{quote.symbol}</Data>
                <Data>{quote.name}</Data>
                <Data>{quote.exchange}</Data>
                <Data>{convertToUSD(quote.close)}</Data>
              </Row>
            </TableBody>
          </Table>
        )}
      </QuoteContainer>
    </Wrapper>
  );
};

export default Quote;

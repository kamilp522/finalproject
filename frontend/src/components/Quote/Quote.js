import React from "react";
import { useState, useEffect } from "react";

import { convertToUSD } from "../../helpers/convertToUSD";

import IndicatorChart from "../Latest/IndicatorChart/IndicatorChart";
import { options } from "../../Charts/bar_chart_options";

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
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });
  const [symbol, setSymbol] = useState("");
  const [quote, setQuote] = useState(null);

  return (
    <Wrapper>
      <QuoteForm
        symbol={symbol}
        setSymbol={setSymbol}
        setQuote={setQuote}
        setChartData={setChartData}
      />
      <QuoteContainer>
        {quote && (
          <>
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
            <IndicatorChart
              title="dsfsd"
              interpretation="dfsfdssdf"
              options={options}
              data={chartData}
            />
          </>
        )}
      </QuoteContainer>
    </Wrapper>
  );
};

export default Quote;

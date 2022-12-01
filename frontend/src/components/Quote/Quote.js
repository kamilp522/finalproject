import React from "react";
import { useState } from "react";

import { convertToUSD } from "../../helpers/convertToUSD";

import Chart from "../Chart/Chart";
import { options } from "../Chart/chart_options";

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
  const [chartData, setChartData] = useState({ labels: null, datasets: null });
  const [typedSymbol, setTypedSymbol] = useState("");
  const [currentSymbol, setCurrentSymbol] = useState("");
  const [quote, setQuote] = useState(null);
  const [chartInterval, setChartInterval] = useState("1h");

  return (
    <Wrapper>
      <QuoteForm
        typedSymbol={typedSymbol}
        setTypedSymbol={setTypedSymbol}
        setQuote={setQuote}
        setChartData={setChartData}
        chartData={chartData}
        chartInterval={chartInterval}
        setChartInterval={setChartInterval}
        setCurrentSymbol={setCurrentSymbol}
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
            {chartData.datasets && (
              <Chart
                title={quote.symbol}
                interpretation={quote.name}
                options={options}
                data={chartData}
                type="line"
                chartInterval={chartInterval}
                setChartInterval={setChartInterval}
                currentSymbol={currentSymbol}
              />
            )}
          </>
        )}
      </QuoteContainer>
    </Wrapper>
  );
};

export default Quote;

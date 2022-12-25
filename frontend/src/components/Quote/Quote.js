import React from "react";
import { useState, useEffect } from "react";

import * as colors from "../variables/colors";

import Chart from "../Chart/Chart";
import { options } from "../Chart/chart_options";

import { chartOptionsAdjustMinValue } from "../../helpers/chartOptionsAdjustMinValue";
import { convertToUSD } from "../../helpers/convertToUSD";

import { QuoteChartContainer } from "./QuoteElements";
import { Wrapper } from "../UI/Wrapper/Wrapper";
import { H2, Description } from "../UI/Text/Text";
import { LoaderContainer } from "../UI/LoaderContainer/LoaderContainer";

import MoonLoader from "react-spinners/MoonLoader";

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
  const [chartInterval, setChartInterval] = useState("4h");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (quote) setLoading(false);
  }, [quote]);

  return (
    <Wrapper>
      <H2 tabIndex="0">Stock Quotes</H2>
      <Description tabIndex="0">
        Quote is a price of one share of company listed on a stock exchange. Our
        quotes consists of unique symbol called a ticker, name of the company,
        exchange offering the stock and price of one share. Can access only
        companies traded on US stock exchanges.
      </Description>
      <QuoteForm
        typedSymbol={typedSymbol}
        setTypedSymbol={setTypedSymbol}
        setQuote={setQuote}
        setChartData={setChartData}
        chartData={chartData}
        chartInterval={chartInterval}
        setChartInterval={setChartInterval}
        setCurrentSymbol={setCurrentSymbol}
        setLoading={setLoading}
      />
      <QuoteChartContainer>
        {quote ? (
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
                  <Data tabIndex="0">{quote.symbol}</Data>
                  <Data tabIndex="0">{quote.name}</Data>
                  <Data tabIndex="0">{quote.exchange}</Data>
                  <Data tabIndex="0">{convertToUSD(quote.close)}</Data>
                </Row>
              </TableBody>
            </Table>
            {chartData.datasets ? (
              <Chart
                chartDescription={quote.name}
                options={chartOptionsAdjustMinValue(options, chartData)}
                data={chartData}
                type="line"
                chartInterval={chartInterval}
                setChartInterval={setChartInterval}
                currentSymbol={currentSymbol}
              />
            ) : (
              <LoaderContainer>
                <MoonLoader
                  loading={true}
                  size={50}
                  color={colors.clr_violet_full}
                />
              </LoaderContainer>
            )}
          </>
        ) : (
          <LoaderContainer>
            <MoonLoader
              loading={loading}
              size={50}
              color={colors.clr_violet_full}
            />
          </LoaderContainer>
        )}
      </QuoteChartContainer>
    </Wrapper>
  );
};

export default Quote;

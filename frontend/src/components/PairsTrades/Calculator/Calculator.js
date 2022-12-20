import React from "react";
import { useState, useEffect } from "react";

import * as colors from "../../variables/colors";

import { convertToUSD } from "../../../helpers/convertToUSD";

import MoonLoader from "react-spinners/MoonLoader";
import { Wrapper } from "../../UI/Wrapper/Wrapper";
import { H2, H3, Description } from "../../UI/Text/Text";
import { LoaderContainer } from "../../UI/LoaderContainer/LoaderContainer";
import { YahooLink } from "./CalculatorElements";
import CalculatorForm from "../../Forms/CalculatorForm";

import { calculatorContent } from "../content";

import {
  TableWrapper,
  Table,
  TableHead,
  TableBody,
  Row,
  Head,
  Data,
} from "../../UI/Table/Table";

const Caluclator = () => {
  const [capital, setCapital] = useState("");
  const [typedCalculatorLongSymbol, setTypedCalculatorLongSymbol] =
    useState("");
  const [typedCalculatorShortSymbol, setTypedCalculatorShortSymbol] =
    useState("");
  const [currentCalculatorLongSymbol, setCurrentCalculatorLongSymbol] =
    useState("");
  const [currentCalculatorShortSymbol, setCurrentCalculatorShortSymbol] =
    useState("");
  const [typedIndexSymbol, setTypedIndexSymbol] = useState("");
  const [currentIndexSymbol, setCurrentIndexSymbol] = useState("");
  const [tableData, setTableData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (tableData) setLoading(false);
  }, [tableData]);

  return (
    <Wrapper>
      <H2>Pairs Trade Calculator</H2>
      <Description>
        {calculatorContent.description} Tickers for &nbsp;
        <YahooLink href={calculatorContent.yahooStocksLink} target="_blank">
          stocks
        </YahooLink>
        &nbsp; and&nbsp;
        <YahooLink href={calculatorContent.yahooIndicesLink} target="_blank">
          indices&nbsp;
        </YahooLink>
        can be found on Yahoo Finance.
      </Description>
      <CalculatorForm
        capital={capital}
        setCapital={setCapital}
        typedCalculatorLongSymbol={typedCalculatorLongSymbol}
        setTypedCalculatorLongSymbol={setTypedCalculatorLongSymbol}
        typedCalculatorShortSymbol={typedCalculatorShortSymbol}
        setTypedCalculatorShortSymbol={setTypedCalculatorShortSymbol}
        setCurrentCalculatorLongSymbol={setCurrentCalculatorLongSymbol}
        setCurrentCalculatorShortSymbol={setCurrentCalculatorShortSymbol}
        typedIndexSymbol={typedIndexSymbol}
        setTypedIndexSymbol={setTypedIndexSymbol}
        setCurrentIndexSymbol={setCurrentIndexSymbol}
        setTableData={setTableData}
        setLoading={setLoading}
      />

      {loading && (
        <LoaderContainer>
          <MoonLoader
            loading={loading}
            size={50}
            color={colors.clr_violet_full}
          />
        </LoaderContainer>
      )}
      {tableData && (
        <>
          <H3>{`${currentCalculatorLongSymbol} / ${currentCalculatorShortSymbol} ${currentIndexSymbol}`}</H3>
          <TableWrapper>
            <Table>
              <TableHead>
                <Row>
                  <Head>Symbol</Head>
                  <Head>Price</Head>
                  <Head>Shares</Head>
                  <Head>Beta</Head>
                  <Head>Total</Head>
                </Row>
              </TableHead>
              <TableBody>
                <Row>
                  <Data>{currentCalculatorLongSymbol}</Data>
                  <Data>{convertToUSD(tableData.longPrice)}</Data>
                  <Data>{tableData.longShares}</Data>
                  <Data>{tableData.longBeta}</Data>
                  <Data>{convertToUSD(tableData.longTotal)}</Data>
                </Row>
                <Row>
                  <Data>{currentCalculatorShortSymbol}</Data>
                  <Data>{convertToUSD(tableData.shortPrice)}</Data>
                  <Data>{tableData.shortShares}</Data>
                  <Data>{tableData.shortBeta}</Data>
                  <Data>{convertToUSD(tableData.shortTotal)}</Data>
                </Row>
                <Row>
                  <Data>Ratio:</Data>
                  <Data></Data>
                  <Data></Data>
                  <Data>{tableData.betaRatio}</Data>
                  <Data></Data>
                </Row>
                <Row>
                  <Data>Total:</Data>
                  <Data></Data>
                  <Data></Data>
                  <Data></Data>
                  <Data>
                    {convertToUSD(tableData.longTotal + tableData.shortTotal)}
                  </Data>
                </Row>
              </TableBody>
            </Table>
          </TableWrapper>
        </>
      )}
    </Wrapper>
  );
};

export default Caluclator;

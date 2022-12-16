import React from "react";
import { useEffect } from "react";

import {
  FooterWrapper,
  FooterContainer,
  FooterLinks,
  FooterLink,
  FooterListItem,
  Credit,
  FooterCredits,
  FooterCopyright,
  WebsiteRights,
} from "./FooterElements";
import { Logo, LogoSpan } from "../UI/Logo/Logo";

import { scrollToTop } from "../../helpers/scrollToTop";
import { useSelector } from "react-redux";

const Footer = () => {
  const logged = useSelector((store) => store.logged);

  useEffect(() => {
    const wrapper = document.getElementById("footer-wrapper");
    const wrapperHeight = window
      .getComputedStyle(wrapper)
      .getPropertyValue("height");
    const container = document.getElementById("footer-container");
    const containerHeight = window
      .getComputedStyle(container)
      .getPropertyValue("height");
    const containerPaddingBlock = window
      .getComputedStyle(container)
      .getPropertyValue("padding-top");

    wrapper.style.setProperty(
      "--before-height",
      `calc(${wrapperHeight} + ${containerHeight} - ${containerPaddingBlock})`
    );
  });

  return (
    <FooterWrapper id="footer-wrapper">
      <FooterContainer id="footer-container">
        <Logo className="logo" to="/" onClick={scrollToTop}>
          <LogoSpan>mid</LogoSpan>trader
        </Logo>
        <FooterLinks>
          <FooterListItem>
            <FooterLink aria-label="footer home" to="/" onClick={scrollToTop}>
              Home
            </FooterLink>
          </FooterListItem>
          <FooterListItem>
            <FooterLink
              aria-label="footer indicators"
              to="/indicators"
              onClick={scrollToTop}
            >
              Indicators
            </FooterLink>
          </FooterListItem>
          {logged.username && (
            <FooterListItem>
              <FooterLink
                aria-label="footer quotes"
                to="/quote"
                onClick={scrollToTop}
              >
                Quotes
              </FooterLink>
            </FooterListItem>
          )}
          {logged.username && (
            <FooterListItem>
              <FooterLink
                aria-label="footer pairs trades"
                to="/about-pairs-trades"
                onClick={scrollToTop}
              >
                Pairs Trades
              </FooterLink>
            </FooterListItem>
          )}
          {logged.username && (
            <FooterListItem>
              <FooterLink
                aria-label="footer ideas for trades"
                to="/write-down-your-ideas"
                onClick={scrollToTop}
              >
                Ideas for Trades
              </FooterLink>
            </FooterListItem>
          )}
        </FooterLinks>
        <FooterCredits>
          <Credit>
            <p>Design inspired by:</p>
            <a
              target="_blank"
              href="https://www.free-css.com/free-css-templates/page278/dotcom"
              rel="noreferrer"
            >
              free-css.com
            </a>
          </Credit>
          <Credit>
            <p>Economic data thanks to:</p>
            <a target="_blank" href="https://twelvedata.com/" rel="noreferrer">
              twelvedata
            </a>
            <a target="_blank" href="https://db.nomics.world/" rel="noreferrer">
              DB.NOMICS
            </a>
            <a
              target="_blank"
              href="https://www.alphavantage.co/"
              rel="noreferrer"
            >
              Alpha Vantage
            </a>
            <a target="_blank" href="https://rapidapi.com/" rel="noreferrer">
              Rapid API
            </a>
            <a
              target="_blank"
              href="https://www.newtonanalytics.com/"
              rel="noreferrer"
            >
              Newton Analytics
            </a>
          </Credit>
        </FooterCredits>
        <FooterCopyright>
          <WebsiteRights>
            Copyright &#169; midtrader {new Date().getFullYear()}
          </WebsiteRights>
        </FooterCopyright>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;

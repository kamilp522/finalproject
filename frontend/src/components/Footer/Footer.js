import React from "react";
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

  return (
    <FooterWrapper>
      <FooterContainer>
        <Logo className="logo" to="/" onClick={scrollToTop}>
          <LogoSpan>mid</LogoSpan>trader
        </Logo>
        <FooterLinks>
          <FooterListItem>
            <FooterLink to="/indicators" onClick={scrollToTop}>
              Indicators
            </FooterLink>
          </FooterListItem>
          {logged.username && (
            <FooterListItem>
              <FooterLink to="/quote" onClick={scrollToTop}>
                Quotes
              </FooterLink>
            </FooterListItem>
          )}
          {logged.username && (
            <FooterListItem>
              <FooterLink to="/about-pairs-trades" onClick={scrollToTop}>
                Pairs Trades
              </FooterLink>
            </FooterListItem>
          )}
          {logged.username && (
            <FooterListItem>
              <FooterLink to="/write-down-idea" onClick={scrollToTop}>
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
            >
              free-css.com
            </a>
          </Credit>
          <Credit>
            <p>Economic data thanks to: </p>
            <a target="_blank" href="https://twelvedata.com/">
              twelvedata
            </a>
            <a target="_blank" href="https://db.nomics.world/">
              DB.NOMICS
            </a>
            <a target="_blank" href="https://www.alphavantage.co/">
              Alpha Vantage
            </a>
            <a target="_blank" href="https://rapidapi.com/">
              Rapid API
            </a>
            <a target="_blank" href="https://www.newtonanalytics.com/">
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

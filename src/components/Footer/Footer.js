import React from "react";
import {
  FooterWrapper,
  FooterContainer,
  FooterContent,
  FooterLinks,
  FooterListItem,
  FooterDataCredit,
  DataCredit,
  FooterDesignCredit,
  DesignCredit,
  FooterCopyright,
  WebsiteRights,
} from "./FooterElements";
import { Logo, LogoSpan } from "../UI/Logo/Logo";
import { scrollToTop } from "../../helpers/scrollToTop";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterContent>
          <Logo to="/" onClick={scrollToTop}>
            <LogoSpan>mid</LogoSpan>trader
          </Logo>
          <FooterLinks>
            <FooterListItem></FooterListItem>
            <FooterListItem></FooterListItem>
            <FooterListItem></FooterListItem>
            <FooterListItem></FooterListItem>
            <FooterListItem></FooterListItem>
          </FooterLinks>
          <FooterDataCredit>
            <DataCredit></DataCredit>
            <DataCredit></DataCredit>
            <DataCredit></DataCredit>
          </FooterDataCredit>
          <FooterDesignCredit>
            <DesignCredit></DesignCredit>
          </FooterDesignCredit>
        </FooterContent>
        <FooterCopyright>
          <WebsiteRights></WebsiteRights>
        </FooterCopyright>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;

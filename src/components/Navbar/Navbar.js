import React from "react";
import {
  NavWrapper,
  NavContainer,
  NavContent,
  NavMenu,
  NavMenuIcon,
  NavList,
  NavListItem,
  NavButtonWrapper,
} from "./NavbarElements";
import { Logo, LogoSpan } from "../UI/Logo/Logo";
import { Button } from "../UI/Button/Button";
import { useState } from "react";
import AnimateHeight from "react-animate-height";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <NavWrapper>
      <AnimateHeight duration={400} height={showNav ? "auto" : 45}>
        <NavContainer>
          <NavContent>
            <Logo href="#">
              <LogoSpan>mid</LogoSpan>trader
            </Logo>
            <NavMenu onClick={() => setShowNav(!showNav)}>
              <NavMenuIcon icon={faBars} />
            </NavMenu>
          </NavContent>
          <NavList>
            <NavListItem>Home</NavListItem>
            <NavListItem>Indicators</NavListItem>
            <NavListItem>Latest</NavListItem>
            <NavListItem>
              <Button>Log in</Button>
            </NavListItem>
            {/*  <NavListItem>Quotes</NavListItem>
            <NavListItem>Market Risk</NavListItem> */}
          </NavList>
        </NavContainer>
      </AnimateHeight>
    </NavWrapper>
  );
};

export default Navbar;

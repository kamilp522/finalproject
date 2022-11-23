import React from "react";
import {
  Nav,
  NavContainer,
  NavContent,
  NavLogo,
  LogoSpan,
  NavMenu,
  NavMenuIcon,
  NavList,
  NavListItem,
} from "./NavbarElements";
import { useState } from "react";
import AnimateHeight from "react-animate-height";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  //   const [height, setHeight] = useState(2.75);

  const [show, setShow] = useState(false);

  return (
    <Nav id="nav">
      <AnimateHeight duration={400} height={show ? "auto" : "2.75rem"}>
        <NavContainer>
          <NavContent>
            <NavLogo href="#">
              <LogoSpan>mid</LogoSpan>trader
            </NavLogo>
            <NavMenu onClick={() => setShow(!show)}>
              <NavMenuIcon icon={faBars} />
            </NavMenu>
          </NavContent>
          <NavList>
            <NavListItem>Home</NavListItem>
            <NavListItem>Indicators</NavListItem>
            <NavListItem>Latest</NavListItem>
            <NavListItem>Quotes</NavListItem>
            <NavListItem>Market Risk</NavListItem>
          </NavList>
        </NavContainer>
      </AnimateHeight>
    </Nav>
  );
};

export default Navbar;

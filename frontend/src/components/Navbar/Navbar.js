import React, { useEffect } from "react";
import { useState } from "react";

import AnimateHeight from "react-animate-height";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import {
  NavWrapper,
  NavContainer,
  NavContent,
  NavMenu,
  NavMenuIcon,
  NavList,
  NavListItem,
  NavLink,
} from "./NavbarElements";
import { Logo, LogoSpan } from "../UI/Logo/Logo";
import { Button } from "../UI/Button/Button";
import { scrollToTop } from "../../helpers/scrollToTop";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <NavWrapper>
      <AnimateHeight duration={400} height={showNav ? "auto" : 45}>
        <NavContainer>
          <NavContent>
            <Logo to="/" onClick={scrollToTop}>
              <LogoSpan>mid</LogoSpan>trader
            </Logo>
            <NavMenu className="nav-menu" onClick={() => setShowNav(!showNav)}>
              <NavMenuIcon icon={faBars} />
            </NavMenu>
          </NavContent>
          <NavList>
            <NavListItem>
              <NavLink to="/" onClick={() => setShowNav(false)}>
                Home
              </NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink to="/indicators" onClick={() => setShowNav(false)}>
                Indicators
              </NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink to="/latest" onClick={() => setShowNav(false)}>
                Latest
              </NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink to="/login" onClick={() => setShowNav(false)}>
                <Button>Log in</Button>
              </NavLink>
            </NavListItem>
          </NavList>
        </NavContainer>
      </AnimateHeight>
    </NavWrapper>
  );
};

export default Navbar;

import React, { useEffect } from "react";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../reducers/loginReducer";
import { setMessageAndError } from "../../helpers/setMessageAndError";

import AnimateHeight from "react-animate-height";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import * as colors from "../variables/colors";

import {
  NavWrapper,
  NavContainer,
  NavContent,
  NavMenu,
  NavMenuIcon,
  NavList,
  NavListItem,
  NavLink,
  NavLoggedIn,
  SupplementaryNavLink,
  SupplementaryNavMenu,
  SupplementaryNavItem,
} from "./NavbarElements";
import { Logo, LogoSpan } from "../UI/Logo/Logo";
import { Button } from "../UI/Button/Button";

const Navbar = () => {
  const logged = useSelector((store) => store.logged);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [showNav, setShowNav] = useState(false);
  const [delay, setDelay] = useState(0);
  const [timeoutId, setTimeoutId] = useState(null);
  const [showPairsTradesNav, setShowPairsTradesNav] = useState(false);
  const [showIdeasNav, setShowIdeasNav] = useState(false);
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isPairsTradesNavExpanded, setIsPairsTradesNavExpanded] =
    useState(false);
  const [isIdeasNavExpanded, setIsIdeasNavExpanded] = useState(false);

  const handleLogout = () => {
    dispatch(logoutUser());

    window.localStorage.removeItem(
      "loggedMidtraderUser",
      JSON.stringify(logged)
    );
    setDelay(400);

    if (timeoutId) clearTimeout(timeoutId);
    setTimeoutId(setTimeout(() => setDelay(0), 500));

    setMessageAndError(dispatch, `user ${logged.username} logged out`);
    navigate("/");
  };

  const hideNavs = () => {
    setShowNav(false);
    setShowPairsTradesNav(false);
    setShowIdeasNav(false);
  };

  const toggleMenuAriaVisibility = () => {
    const links = [...document.querySelectorAll(".nav-link")];
    links.forEach((link) => {
      const tabIndex = link.getAttribute("tabIndex");
      if (tabIndex === "-1") link.setAttribute("tabIndex", "0");
      else link.setAttribute("tabIndex", "-1");
    });

    const menuNavList = document.getElementById("menu-nav-list");
    menuNavList.setAttribute("aria-hidden", showNav);
  };

  return (
    <NavWrapper>
      <AnimateHeight
        duration={400}
        delay={delay}
        height={showNav ? "auto" : 45}
        id="nav-container"
      >
        <NavContainer>
          <NavContent>
            <Logo
              aria-label="midtrader logo"
              className="logo"
              to="/"
              onClick={() => {
                hideNavs();
              }}
            >
              <LogoSpan>mid</LogoSpan>trader
            </Logo>
            <NavMenu
              id="menu-icon"
              aria-label="menu"
              aria-expanded={isNavExpanded}
              onClick={() => {
                setShowNav(!showNav);
                setShowPairsTradesNav(false);
                setShowIdeasNav(false);
                setIsNavExpanded(!isNavExpanded);
                toggleMenuAriaVisibility();
              }}
            >
              <NavMenuIcon icon={faBars} />
            </NavMenu>
          </NavContent>
          <NavList id="menu-nav-list" aria-hidden={true}>
            {logged.username && (
              <NavListItem>
                <NavLoggedIn id="logged-user-info">
                  {logged.username} logged in
                </NavLoggedIn>
              </NavListItem>
            )}
            <NavListItem>
              <NavLink
                aria-label="home"
                className="nav-link"
                tabIndex="-1"
                to="/"
                onClick={() => {
                  hideNavs();
                  toggleMenuAriaVisibility();
                }}
              >
                Home
              </NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink
                aria-label="indicators"
                className="nav-link"
                tabIndex="-1"
                to="/indicators"
                onClick={() => {
                  hideNavs();
                  toggleMenuAriaVisibility();
                }}
              >
                Indicators
              </NavLink>
            </NavListItem>
            {logged.username && (
              <>
                <NavListItem>
                  <NavLink
                    aria-label="quote"
                    className="nav-link"
                    tabIndex="-1"
                    to="/quote"
                    onClick={() => {
                      hideNavs();
                      toggleMenuAriaVisibility();
                    }}
                  >
                    Quote
                  </NavLink>
                </NavListItem>
                <NavListItem className="nav-pairs-trades-list-item">
                  <SupplementaryNavLink
                    aria-label="pairs trades"
                    aria-expanded={isPairsTradesNavExpanded}
                    className="nav-link"
                    tabIndex="-1"
                    onClick={() => {
                      setShowPairsTradesNav(!showPairsTradesNav);
                      setIsPairsTradesNavExpanded(!isPairsTradesNavExpanded);
                      setShowIdeasNav(false);
                    }}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        setShowPairsTradesNav(!showPairsTradesNav);
                        setIsPairsTradesNavExpanded(!isPairsTradesNavExpanded);
                        setShowIdeasNav(false);
                      }
                    }}
                  >
                    Pairs Trades
                  </SupplementaryNavLink>
                  <SupplementaryNavMenu showPairsTradesNav={showPairsTradesNav}>
                    <SupplementaryNavItem>
                      <NavLink
                        aria-label="about pairs trades"
                        className="nav-link"
                        tabIndex="-1"
                        to="/about-pairs-trades"
                        onClick={() => {
                          hideNavs();
                          toggleMenuAriaVisibility();
                        }}
                      >
                        About Pairs Trades
                      </NavLink>
                    </SupplementaryNavItem>
                    <SupplementaryNavItem>
                      <NavLink
                        aria-label="ratio chart"
                        className="nav-link"
                        tabIndex="-1"
                        to="/ratio-chart"
                        onClick={() => {
                          hideNavs();
                          toggleMenuAriaVisibility();
                        }}
                      >
                        Ratio Chart
                      </NavLink>
                    </SupplementaryNavItem>
                    <SupplementaryNavItem>
                      <NavLink
                        aria-label="pairs trade calculator"
                        className="nav-link"
                        tabIndex="-1"
                        to="/calculator"
                        onClick={() => {
                          hideNavs();
                          toggleMenuAriaVisibility();
                        }}
                      >
                        Pairs Trade Calculator
                      </NavLink>
                    </SupplementaryNavItem>
                  </SupplementaryNavMenu>
                </NavListItem>
                <NavListItem className="ideas-list-item">
                  <SupplementaryNavLink
                    aria-label="ideas for trades"
                    aria-expanded={isIdeasNavExpanded}
                    className="nav-link"
                    tabIndex="-1"
                    onClick={() => {
                      setShowIdeasNav(!showIdeasNav);
                      setShowPairsTradesNav(false);
                      setIsIdeasNavExpanded(!isIdeasNavExpanded);
                    }}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        setShowIdeasNav(!showIdeasNav);
                        setShowPairsTradesNav(false);
                        setIsIdeasNavExpanded(!isIdeasNavExpanded);
                      }
                    }}
                  >
                    Ideas for Trades
                  </SupplementaryNavLink>
                  <SupplementaryNavMenu showIdeasNav={showIdeasNav}>
                    <SupplementaryNavItem>
                      <NavLink
                        aria-label="write down your ideas"
                        className="nav-link"
                        tabIndex="-1"
                        to="/write-down-your-ideas"
                        onClick={() => {
                          hideNavs();
                          toggleMenuAriaVisibility();
                        }}
                      >
                        Write Down Your Ideas
                      </NavLink>
                    </SupplementaryNavItem>
                    <SupplementaryNavItem>
                      <NavLink
                        aria-label="your ideas"
                        className="nav-link"
                        tabIndex="-1"
                        to="/your-ideas"
                        onClick={() => {
                          hideNavs();
                          toggleMenuAriaVisibility();
                        }}
                      >
                        Your Ideas
                      </NavLink>
                    </SupplementaryNavItem>
                  </SupplementaryNavMenu>
                </NavListItem>
              </>
            )}
            {!logged.username ? (
              <NavListItem>
                <NavLink
                  aria-label="login"
                  className="nav-link"
                  tabIndex="-1"
                  to="/login"
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      hideNavs();
                      toggleMenuAriaVisibility();
                      handleLogout();
                    }
                  }}
                >
                  <Button tabIndex="-1" onClick={() => setShowNav(false)}>
                    log in
                  </Button>
                </NavLink>
              </NavListItem>
            ) : (
              <NavListItem>
                <NavLink
                  aria-label="logout"
                  className="nav-link"
                  tabIndex="-1"
                  to="/"
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      hideNavs();
                      toggleMenuAriaVisibility();
                      handleLogout();
                    }
                  }}
                >
                  <Button
                    aria-hidden="true"
                    tabIndex="-1"
                    onClick={() => {
                      hideNavs();
                      toggleMenuAriaVisibility();
                      handleLogout();
                    }}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") handleLogout();
                    }}
                    style={{
                      backgroundColor: colors.clr_red_800,
                    }}
                  >
                    log out
                  </Button>
                </NavLink>
              </NavListItem>
            )}
          </NavList>
        </NavContainer>
      </AnimateHeight>
    </NavWrapper>
  );
};

export default Navbar;

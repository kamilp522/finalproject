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

  const toggleTabIndexOnLinks = () => {
    const links = [...document.querySelectorAll(".nav-link")];
    links.forEach((link) => {
      const tabIndex = link.getAttribute("tabIndex");
      if (tabIndex === "-1") link.setAttribute("tabIndex", "0");
      else link.setAttribute("tabIndex", "-1");
    });
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
                toggleTabIndexOnLinks();
              }}
            >
              <NavMenuIcon icon={faBars} />
            </NavMenu>
          </NavContent>
          <NavList>
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
                  toggleTabIndexOnLinks();
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
                  toggleTabIndexOnLinks();
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
                      toggleTabIndexOnLinks();
                    }}
                  >
                    Quote
                  </NavLink>
                </NavListItem>
                <NavListItem className="nav-pairs-trades-list-item">
                  <SupplementaryNavLink
                    aria-label="pairs trades"
                    className="nav-link"
                    tabIndex="-1"
                    onClick={() => {
                      setShowPairsTradesNav(!showPairsTradesNav);
                      setShowIdeasNav(false);
                    }}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        setShowPairsTradesNav(!showPairsTradesNav);
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
                          toggleTabIndexOnLinks();
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
                          toggleTabIndexOnLinks();
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
                          toggleTabIndexOnLinks();
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
                    className="nav-link"
                    tabIndex="-1"
                    onClick={() => {
                      setShowIdeasNav(!showIdeasNav);
                      setShowPairsTradesNav(false);
                    }}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        setShowIdeasNav(!showIdeasNav);
                        setShowPairsTradesNav(false);
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
                          toggleTabIndexOnLinks();
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
                          toggleTabIndexOnLinks();
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
                      toggleTabIndexOnLinks();
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
                      toggleTabIndexOnLinks();
                      handleLogout();
                    }
                  }}
                >
                  <Button
                    aria-hidden="true"
                    tabIndex="-1"
                    onClick={() => {
                      hideNavs();
                      toggleTabIndexOnLinks();
                      handleLogout();
                    }}
                    onKeyDown={() => handleLogout()}
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

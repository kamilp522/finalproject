import styled from "styled-components";

import * as colors from "../variables/colors";
import * as font_sizes from "../variables/font-sizes";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const NavWrapper = styled.nav`
  padding: 0.75em;
  background-color: ${colors.clr_black_full};

  @media (min-width: 1000px) {
    padding: 1em 0.75em;
  }
`;

export const NavContainer = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
`;

export const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.25em;
`;

export const NavMenu = styled.button`
  background-color: ${colors.clr_black_full};
  border: none;
  cursor: pointer;
`;

export const NavMenuIcon = styled(FontAwesomeIcon)`
  font-size: ${font_sizes.fs_650};
  color: white;
`;

export const NavList = styled.ul`
  margin-top: 1em;

  @media (min-width: 1000px) {
    text-align: right;
  }
`;

export const NavListItem = styled.li`
  padding: 0.75em 0.25em;

  &.nav-pairs-trades-list-item {
    color: white;
    position: relative;
  }
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: ${font_sizes.fs_400};
  padding: 0.5em 1.25em 0.5em 0;

  @media (min-width: 1000px) {
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const NavButtonWrapper = styled.div`
  display: flex;
  align-self: center;
`;

export const NavLoggedIn = styled.small`
  display: block;
  padding-bottom: 0.5em;
  color: ${colors.clr_cream_500};
  font-size: ${font_sizes.fs_400};

  @media (min-width: 1000px) {
    padding-right: 1em;
    font-size: ${font_sizes.fs_500};
  }
`;

export const SupplementaryNavMenu = styled.ul`
  display: ${({ showPairsTradesNav, showIdeasNav }) =>
    showPairsTradesNav || showIdeasNav ? "inline-flex" : "none"};
  position: absolute;
  transform: translateY(-50%);
  flex-direction: column;
  background-color: ${colors.clr_light_black_900};
  padding: 0.5em 1em;
  border-radius: 0.5rem;
  text-align: left;
  min-width: 15em;

  @media (min-width: 1000px) {
    transform: translateX(-150%);
  }
`;

export const SupplementaryNavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: ${font_sizes.fs_400};
  padding: 0.5em 1.25em 0.5em 0;
  cursor: pointer;

  @media (min-width: 1000px) {
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const SupplementaryNavItem = styled.li`
  padding-block: 0.75em;
`;

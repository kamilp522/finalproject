import React, { useEffect } from "react";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../reducers/loginReducer";
import { setNotification } from "../../reducers/notificationReducer";

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
	NavPairTradesLink,
	NavPairTradesMenu,
	NavPairTradesItem,
} from "./NavbarElements";
import { Logo, LogoSpan } from "../UI/Logo/Logo";
import { Button } from "../UI/Button/Button";

const Navbar = () => {
	const logged = useSelector((store) => store.logged);
	const dispatch = useDispatch();

	const navigate = useNavigate();

	const [showNav, setShowNav] = useState(true);
	const [delay, setDelay] = useState(0);
	const [timeoutId, setTimeoutId] = useState(null);
	const [showPairTradesNav, setShowPairTradesNav] = useState(false);

	const setMessageAndError = (message, error) => {
		dispatch(setNotification({ message, error }));
	};

	const handleLogout = () => {
		dispatch(logoutUser());

		window.localStorage.removeItem(
			"loggedMidtraderUser",
			JSON.stringify(logged)
		);
		setDelay(400);

		if (timeoutId) clearTimeout(timeoutId);
		setTimeoutId(setTimeout(() => setDelay(0), 500));

		setMessageAndError(`user ${logged.username} logged out`);
		navigate("/");
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
							className="logo"
							to="/"
							onClick={() => {
								setShowNav(false);
								setShowPairTradesNav(false);
							}}
						>
							<LogoSpan>mid</LogoSpan>trader
						</Logo>
						<NavMenu
							aria-label="menu"
							onClick={() => {
								setShowNav(!showNav);
								setShowPairTradesNav(false);
							}}
						>
							<NavMenuIcon icon={faBars} />
						</NavMenu>
					</NavContent>
					<NavList>
						{logged.username && (
							<NavListItem>
								<NavLoggedIn>{logged.username} logged in</NavLoggedIn>
							</NavListItem>
						)}
						<NavListItem>
							<NavLink
								aria-label="home"
								to="/"
								onClick={() => {
									setShowNav(false);
									setShowPairTradesNav(false);
								}}
							>
								Home
							</NavLink>
						</NavListItem>
						<NavListItem>
							<NavLink
								aria-label="indicators"
								to="/indicators"
								onClick={() => {
									setShowNav(false);
									setShowPairTradesNav(false);
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
										to="/quote"
										onClick={() => {
											setShowNav(false);
											setShowPairTradesNav(false);
										}}
									>
										Quotes
									</NavLink>
								</NavListItem>
								<NavListItem className="nav-pair-trades-list-item">
									<NavPairTradesLink
										onClick={() => setShowPairTradesNav(!showPairTradesNav)}
									>
										Pair Trades
									</NavPairTradesLink>
									<NavPairTradesMenu showPairTradesNav={showPairTradesNav}>
										<NavPairTradesItem>
											<NavLink>About Pair Trades</NavLink>
										</NavPairTradesItem>
										<NavPairTradesItem>
											<NavLink>Ratio Chart</NavLink>
										</NavPairTradesItem>
										<NavPairTradesItem>
											<NavLink>Pair Trade Calculator</NavLink>
										</NavPairTradesItem>
									</NavPairTradesMenu>
								</NavListItem>
							</>
						)}
						{!logged.username ? (
							<NavListItem>
								<NavLink aria-label="login" to="/login">
									<Button onClick={() => setShowNav(false)}>Log in</Button>
								</NavLink>
							</NavListItem>
						) : (
							<NavListItem>
								<NavLink aria-label="logout" to="/">
									<Button
										onClick={() => {
											setShowNav(false);
											setShowPairTradesNav(false);
											handleLogout();
										}}
										style={{
											backgroundColor: colors.clr_red_800,
										}}
									>
										Log out
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

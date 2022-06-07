import React from "react";

// assets
import './header.scss';
import './logo.png';

const Header = () => {
	return (
		<header className="header">
			<div className="header__container">
				<img src="../img/logo.png" alt="логотип" className="header__logo" />

				<nav className="header__menu">
					<ul className="header__list">
						<li className="header__item"><a href="#!" className="header__link">How It Works</a></li>
						<li className="header__item"><a href="#!" className="header__link">Why Breef?</a></li>
						<li className="header__item"><a href="#!" className="header__link">Join as Agency</a></li>
						<li className="header__item"><a href="#!" className="header__link">breef(pay)</a></li>
					</ul>

					<button className="header__btn header__item header__link">Get Started</button>
				</nav>
			</div>
		</header>
	);
};

export default Header;
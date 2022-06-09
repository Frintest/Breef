import React from "react";

// components
import Header from '../header/header.js';
import ServicesMenu from "../services-menu/services-menu.js";

// assets
import '../../img/main-screen.png';

const App = () => {
	return (
		<div className="App">
			<div className="wrapper">
				{ /* Header */ }
				<Header />

				<main className="main">
					{ /* ServicesMenu */ }
					<ServicesMenu />

					{ /* main screen */ }
					<section className="screen">
						<div className="screen__container">
							<div className="screen-block__offer">
								<h1 className="screen__title title">THE EASIEST WAY TO FIND AN AGENCY.</h1>
								<p className="screen__sub-title sub-title">{'Find vetted agencies. Get pitches in < 5 days. Manage contracts + payments (in one place).'}</p>

								<div className="screen__block-btn">
									<button className="screen__btn btn btn_purple">Get Started, Free</button>
									<button className="screen__btn btn">Get Started, Free</button>
									<a href="#!" className="screen__action">Agencies, Start Here</a>
								</div>
							</div>

							<img src="./img/main-screen.png" alt="наши преимущества" className="screen-block__image" />
						</div>
					</section>
				</main>
			</div>
		</div>
	);
};

export default App;
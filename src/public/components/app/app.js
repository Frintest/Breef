import React from "react";

// components
import Header from '../header/header.js';
import ServicesMenu from "../services-menu/services-menu.js";

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
							<div className="screen-block-offer"></div>
						</div>
					</section>
				</main>
			</div>
		</div>
	);
};

export default App;
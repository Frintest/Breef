import React from "react";

// assets
import './services-menu.scss';

const ServicesMenu = () => {
	const servicesData = ['Digital Marketing', 'Web Development', 'Paid Advertising', 'Branding + Creative', 'PR + Campaigns', 'Organic + Paid Social'];

	const services = servicesData.map(item => {
		return (
			<li className="services-menu__item"><a href="#!" className="services-menu__link">{item}</a></li>
		);
	});

	return (
		<div className="services-menu">
			<div className="services-menu__container">
				<div className="services-menu__title">Services:</div>
				<ul className="services-menu__list">{services}</ul>
			</div>
		</div>
	);
};

export default ServicesMenu;
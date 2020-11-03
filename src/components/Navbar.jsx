import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/scss/components/Navbar.scss';
import logoSm from '../assets/img/logo-sm.svg';
import logoMd from '../assets/img/logo-md.svg';
import logoLg from '../assets/img/logo-lg.svg';
import Account from '../assets/img/Account.svg';

class Navbar extends React.Component {
	render() {
		return (
			<header className="header-main" id="header">
				<Link className="navbar-brand" to="/">
					<picture className="logo">
						<source media="(max-width: 480px)" srcSet={logoSm} />
						<source media="(max-width: 768px)" srcSet={logoMd} />
						<source media="(min-width: 769px)" srcSet={logoLg} />
						<img src={logoLg} alt="Company" />
					</picture>
				</Link>
				<ul className="navbar">
					<li><Link to="/login">Login</Link></li>
					<li><Link to="/register">Register</Link></li>
					<li><Link to="/contact">Contacto</Link></li>
					<li><Link to="/faqs">FAQs</Link></li>
					<li>
						<Link to="/account">
							<img className="icon" src={Account} />
						</Link>
					</li>
				</ul>
			</header>
		);
	};
};

export default Navbar;

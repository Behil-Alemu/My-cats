import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Nav({ cats }) {
	const catLinks = cats.map((cat) => (
		<Link key={cat.name} to={`/cats/${cat.name.toLowerCase()}`}>
			{cat.name}
		</Link>
	));
	return (
		<nav>
			<NavLink exact to="/cats" className="nav-home">
				Home
			</NavLink>
			{catLinks}
		</nav>
	);
}

export default Nav;

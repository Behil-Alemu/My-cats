import React from 'react';
import { Link, Navigate } from 'react-router-dom';

function CatDetails({ cat }) {
	if (!cat) return <Navigate to="/cats" />;

	return (
		<div className="filtered-cat-details">
			<div className="col d-flex flex-column align-items-center">
				<img src={cat.src} alt={cat.name} />
				<h2>{cat.name}</h2>
				<h3>{cat.age} years old</h3>
				<ul>{cat.facts.map((fact, i) => <li key={i}>{fact}</li>)}</ul>
				<Link to="/cats">Go Back</Link>
			</div>
		</div>
	);
}

export default CatDetails;

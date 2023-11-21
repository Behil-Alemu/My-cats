import React from 'react';
import { Link } from 'react-router-dom';

function CatList({ props }) {
	return (
		<div>
			<h1>Freeloaders that live with me!</h1>
			<div className="cat-container">
				{props.map((cat) => (
					<Link to={`/cats/${cat.name.toLowerCase()}`} key={cat.name} className="cat-card-link">
						<div className="cat-card" key={cat.name}>
							<img className="cat-image" src={cat.src} alt={cat.name} />
							<h3 className="cat-name">
								<Link to={`/cats/${cat.name.toLowerCase()}`}>{cat.name}</Link>
							</h3>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}

export default CatList;

import React from 'react';
import { useParams } from 'react-router-dom';
import CatDetails from './CatDetails';

function FilterCatDetails({ cats }) {
	const { name } = useParams();

	if (name) {
		const currentcat = cats.find((cat) => cat.name.toLowerCase() === name.toLowerCase());
		return <CatDetails cat={currentcat} />;
	}

	return null;
}

export default FilterCatDetails;

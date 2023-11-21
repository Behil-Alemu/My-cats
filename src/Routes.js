import React from 'react';
import { Route, Navigate, Routes} from "react-router-dom";
import CatList from './CatList'
import FilterCatDetails from './FilterCatDetails'

function routes({cats}) {
	return (
		<Routes>
			<Route exact path="/cats"
				element={<CatList props={cats}/>} 

		/>


			<Route path="/cats/:name"
            element={<FilterCatDetails cats={cats} />}
		/>
			<Route path="/" element={<Navigate to="/cats" />}
		/>
		</Routes>

	);
    
}
export default routes;

import React from 'react';
import { Link } from "react-router-dom";

function DogList({ props }) {

	return (
	<div>
        <div >
          <h1 className="text-center">
            List of Doggos
          </h1>
        
      </div>
      <div >
        {props.map(dog => (
          <div  key={dog.name}>
            <img src={dog.src} alt={dog.name} />
            <h3 >
              <Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link>
            </h3>
          </div>
        ))}
      </div>
    </div>
	);
}

export default DogList;

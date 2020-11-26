import React from 'react';
import loader from '../loader.gif';

function Spinner() {
	return (
		<div className="loader">
			<img src={loader} alt="loader" />
			<h1>Loading...</h1>
		</div>
	);
}

export default Spinner;

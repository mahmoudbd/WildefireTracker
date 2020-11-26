import React from 'react';

function LocationInfoBox({ info }) {
	return (
		<div className="location-info">
			<h2>Event Loacation Info</h2>
			<ul>
				<li>
					ID: <strong>{info.id}</strong>
				</li>
				<li>
					TITLE: <strong>{info.title}</strong>
				</li>
				<li>
					Date: <strong>{info.date}</strong>
				</li>
			</ul>
		</div>
	);
}

export default LocationInfoBox;

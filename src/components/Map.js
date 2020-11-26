import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import LocatuinMarker from './LocationMarker';
import LocationInfoBox from './LocationInfoBox';

function Map({ eventData, center, zoom }) {
	const [ locationInfo, setLocationInfo ] = useState(null);
	const markers = eventData.map((ev, i) => {
		if (ev.categories[0].id === 8) {
			return (
				<LocatuinMarker
					key={i}
					lat={ev.geometries[0].coordinates[1]}
					lng={ev.geometries[0].coordinates[0]}
					onClick={() =>
						setLocationInfo({
							id: ev.id,
							title: ev.title,
							date: ev.geometries[0].date
						})}
				/>
			);
		} else {
			return null;
		}
	});
	return (
		<div className="map">
			<GoogleMapReact
				bootstrapURLKeys={{ key: `${process.env.REACT_APP_API_KEY}` }}
				defaultCenter={center}
				defaultZoom={zoom}
			>
				{markers}
			</GoogleMapReact>
			{locationInfo && <LocationInfoBox info={locationInfo} />}
		</div>
	);
}
Map.defaultProps = {
	center: {
		lat: 37.09024,
		lng: -95.712891
	},
	zoom: 6
};

export default Map;

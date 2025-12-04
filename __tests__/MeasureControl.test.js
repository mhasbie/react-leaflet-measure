import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MapContainer, TileLayer } from 'react-leaflet';
import MeasureControl from '../src/MeasureControl';

describe('MeasureControl', () => {
	it('renders MeasureControl with given parameters', () => {
		const mapOptions = {
			center: [0, 0],
			zoom: 1,
			minZoom: 1,
			maxZoom: 22,
			style: { height: '400px', width: '600px' },
		};
		const measureOptions = {
			position: 'topright',
			primaryLengthUnit: 'meters',
			secondaryLengthUnit: 'kilometers',
			primaryAreaUnit: 'sqmeters',
			secondaryAreaUnit: 'acres',
			activeColor: '#db4a29',
			completedColor: '#9b2d14',
		};

		// Render the map with MeasureControl
		const { container } = render(
			<MapContainer {...mapOptions}>
				<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
				<MeasureControl {...measureOptions} />
			</MapContainer>
		);

		// Check that the map and control container are rendered
		// The measure control adds a .leaflet-control-measure element
		const measureControl = container.querySelector('.leaflet-control-measure');
		expect(measureControl).toBeInTheDocument();
		// Optionally, check the position class
		expect(measureControl).toHaveClass('leaflet-control');
		expect(measureControl.parentElement).toHaveClass('leaflet-top', 'leaflet-right');
	});
});
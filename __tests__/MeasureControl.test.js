import React from 'react';
import { act, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MapContainer, useMap } from 'react-leaflet';
import L from 'leaflet';
import MeasureControl from '../src/MeasureControl';

const mapOptions = {
	center: [0, 0],
	zoom: 1,
	minZoom: 1,
	maxZoom: 22,
	style: { height: '400px', width: '600px' },
};

const MapCapture = ({ onMap }) => {
	onMap(useMap());
	return null;
};

describe('MeasureControl', () => {
	afterEach(() => {
		jest.restoreAllMocks();
	});

	it('renders with the provided options and position', () => {
		const measureOptions = {
			position: 'topright',
			primaryLengthUnit: 'meters',
			secondaryLengthUnit: 'kilometers',
			primaryAreaUnit: 'sqmeters',
			secondaryAreaUnit: 'acres',
			activeColor: '#db4a29',
			completedColor: '#9b2d14',
		};
		const measureFactory = jest.spyOn(L.control, 'measure');
		const { container } = render(
			<MapContainer {...mapOptions}>
				<MeasureControl {...measureOptions} />
			</MapContainer>
		);

		expect(measureFactory).toHaveBeenCalledWith(measureOptions);
		const measureControl = container.querySelector('.leaflet-control-measure');
		expect(measureControl).toBeInTheDocument();
		expect(measureControl).toHaveClass('leaflet-control');
		expect(measureControl.parentElement).toHaveClass('leaflet-top', 'leaflet-right');
	});

	it('forwards measure events to the corresponding callbacks', () => {
		const onMeasureStart = jest.fn();
		const onMeasureFinish = jest.fn();
		let map;

		render(
			<MapContainer {...mapOptions}>
				<MeasureControl
					onMeasureStart={onMeasureStart}
					onMeasureFinish={onMeasureFinish}
				/>
				<MapCapture onMap={(instance) => { map = instance; }} />
			</MapContainer>
		);

		act(() => {
			map.fire('measurestart', { source: 'unit-test' });
			map.fire('measurefinish', { points: [] });
		});

		expect(onMeasureStart).toHaveBeenCalledWith(
			expect.objectContaining({ type: 'measurestart', source: 'unit-test' })
		);
		expect(onMeasureFinish).toHaveBeenCalledWith(
			expect.objectContaining({ type: 'measurefinish', points: [] })
		);
	});

	it('recreates the Leaflet control when options change and removes it on unmount', () => {
		const measureFactory = jest.spyOn(L.control, 'measure');
		const renderMap = (position) => (
			<MapContainer {...mapOptions}>
				<MeasureControl position={position} />
			</MapContainer>
		);
		const { container, rerender, unmount } = render(renderMap('topright'));
		const firstControl = measureFactory.mock.results[0].value;
		const firstRemove = jest.spyOn(firstControl, 'remove');

		rerender(renderMap('bottomleft'));

		const secondControl = measureFactory.mock.results[1].value;
		const secondRemove = jest.spyOn(secondControl, 'remove');
		expect(firstRemove).toHaveBeenCalledTimes(1);
		expect(measureFactory).toHaveBeenCalledTimes(2);
		expect(container.querySelector('.leaflet-control-measure').parentElement)
			.toHaveClass('leaflet-bottom', 'leaflet-left');

		unmount();

		expect(secondRemove).toHaveBeenCalledTimes(1);
	});
});

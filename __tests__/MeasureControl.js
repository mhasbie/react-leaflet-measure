/* global describe, expect, it, jest */

import React, { createRef } from 'react';
import { mount } from './enzyme';
import 'jest-enzyme';

import { Map, TileLayer, withLeaflet } from 'react-leaflet';
import MeasureControlDefault from '../dist/react-leaflet-measure.min.js';
const MeasureControl = withLeaflet(MeasureControlDefault);

describe('MeasureControl', () => {

	it('Should instantiate a measurement control with given parameters', () => {
		
		const mapOptions = {
			center: [0, 0],
			zoom: 1,
			minZoom: 1,
			maxZoom: 22,
		};
		const measureOptions = {
			position: 'topright',
			primaryLengthUnit: 'meters',
			secondaryLengthUnit: 'kilometers',
			primaryAreaUnit: 'sqmeters',
			secondaryAreaUnit: 'acres',
			activeColor: '#db4a29',
			completedColor: '#9b2d14'
		};
		
		const measureControlRef = createRef();

		const wrapper = mount(
			<Map {...mapOptions}>
				<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
				<MeasureControl {...measureOptions} ref={measureControlRef} />
			</Map>
		);
		
		expect(wrapper).not.toBeEmptyRender();
		expect(measureControlRef.current.leafletElement.options.position).toEqual('topright');
	})
})
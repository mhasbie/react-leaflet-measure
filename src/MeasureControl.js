import { useEffect, useRef } from 'react';
import { useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import './leaflet-measure.js';
import './leaflet-measure.css';

/**
 * Functional MeasureControl for React-Leaflet v4+ and React 19
 * @param {object} props - Props for the control
 * @param {function} [props.onMeasureStart] - Handler for measurestart event
 * @param {function} [props.onMeasureFinish] - Handler for measurefinish event
 * @returns null
 */
const MeasureControl = ({ onMeasureStart, onMeasureFinish, ...options }) => {
	const controlRef = useRef();

	const map = useMapEvents({
		measurestart: (e) => {
			if (typeof onMeasureStart === 'function') {
				onMeasureStart(e);
			}
		},
		measurefinish: (e) => {
			if (typeof onMeasureFinish === 'function') {
				onMeasureFinish(e);
			}
		},
	});

	useEffect(() => {
		// Create control
		const control = L.control.measure(options);
		controlRef.current = control;
		control.addTo(map);

		// Cleanup
		return () => {
			control.remove();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [map, onMeasureStart, onMeasureFinish, JSON.stringify(options)]);

	return null;
};

export default MeasureControl;

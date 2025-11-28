import { useEffect, useRef } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-measure';
import './leaflet-measure.css';

/**
 * Functional MeasureControl for React-Leaflet v4+ and React 19
 * @param {object} props - Props for the control
 * @param {function} [props.onMeasurestart] - Handler for measurestart event
 * @param {function} [props.onMeasurefinish] - Handler for measurefinish event
 * @returns null
 */
const MeasureControl = ({ onMeasurestart, onMeasurefinish, ...options }) => {
	const map = useMap();
	const controlRef = useRef();

	useEffect(() => {
		// Create control
		const control = L.control.measure(options);
		controlRef.current = control;
		control.addTo(map);

		// Event handlers
		if (typeof onMeasurestart === 'function') {
			map.on('measurestart', onMeasurestart);
		}
		if (typeof onMeasurefinish === 'function') {
			map.on('measurefinish', onMeasurefinish);
		}

		// Cleanup
		return () => {
			if (typeof onMeasurestart === 'function') {
				map.off('measurestart', onMeasurestart);
			}
			if (typeof onMeasurefinish === 'function') {
				map.off('measurefinish', onMeasurefinish);
			}
			control.remove();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [map, onMeasurestart, onMeasurefinish, JSON.stringify(options)]);

	return null;
};

export default MeasureControl;

import React, { useCallback, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { MapContainer } from 'react-leaflet';
import MeasureControl from '../../src/MeasureControl';

function App() {
	const [measureEvent, setMeasureEvent] = useState('idle');
	const [measureResult, setMeasureResult] = useState('none');
	const onMeasureStart = useCallback(() => setMeasureEvent('started'), []);
	const onMeasureFinish = useCallback((event) => {
		setMeasureEvent('finished');
		setMeasureResult(JSON.stringify({
			pointCount: event.pointCount,
			points: event.points.length,
			length: event.length,
		}));
	}, []);

	return (
		<>
			<h1>Measurement fixture</h1>
			<output data-testid="measure-event">{measureEvent}</output>
			<output data-testid="measure-result">{measureResult}</output>
			<MapContainer center={[0, 0]} zoom={4} className="map">
				<MeasureControl
					position="topright"
					primaryLengthUnit="meters"
					onMeasureStart={onMeasureStart}
					onMeasureFinish={onMeasureFinish}
				/>
			</MapContainer>
		</>
	);
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

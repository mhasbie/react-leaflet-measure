import { MapControl } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-measure';
import './leaflet-measure.css';

export default class MeasureControl extends MapControl {
	createLeafletElement(props) {
		return L.control.measure(props);
	}

	componentDidMount() {
		super.componentDidMount();
		const { map } = this.props.leaflet || this.context;
		const {
			onMeasurestart,
			onMeasurefinish
		} = this.props;
		map.on('measurestart', (e) => {
				this._propagateEvent(onMeasurestart, e);
			})
			.on('measurefinish', (e) => {
				this._propagateEvent(onMeasurefinish, e);
			});
	}
	
	updateLeafletElement(fromProps, toProps) {
		const { map } = this.props.leaflet || this.context;
		this.leafletElement.remove();
		this.leafletElement = new L.control.measure(toProps);
		this.leafletElement.addTo(map)
	}
	
	_propagateEvent(eventHandler, event) {
		if (typeof eventHandler !== 'function') return;
		eventHandler(event);
	}
}

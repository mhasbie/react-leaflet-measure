import { MapControl } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-measure/dist/leaflet-measure.js';

export default class MeasureControl extends MapControl {
	createLeafletElement(props) {
		// const { minSize = 10, markerCluster, markerOptions, ...options } = props;
		return L.control.measure(props);
	}

	componentDidMount() {
		const { map } = this.context;
		this.leafletElement.addTo(map);
	}
}

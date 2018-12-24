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
	}
}

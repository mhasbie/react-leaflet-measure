const { Map, TileLayer, withLeaflet } = ReactLeaflet;
const MeasureControlDefault = ReactLeafletMeasure;
const MeasureControl = withLeaflet(MeasureControlDefault);

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			center: [2.935403, 101.448205],
			zoom: 10,
			minZoom: 1,
			maxZoom: 22,
		}
	}

	render() {
		const position = [this.state.lat, this.state.lng];
		const measureOptions = {
			position: 'topright',
			primaryLengthUnit: 'meters',
			secondaryLengthUnit: 'kilometers',
			primaryAreaUnit: 'sqmeters',
			secondaryAreaUnit: 'acres',
			activeColor: '#db4a29',
			completedColor: '#9b2d14'
		};
		return (
			<Map {...this.state}>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
				/>
				<MeasureControl {...measureOptions} />
			</Map>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('container'));

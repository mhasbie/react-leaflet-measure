
import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { MapContainer, TileLayer } from 'react-leaflet';
import MeasureControl from 'react-leaflet-measure';

function App() {
	const [mapOptions] = React.useState({
		center: [2.935403, 101.448205],
		zoom: 10,
		minZoom: 1,
		maxZoom: 22
	});

	const [position, setPosition] = React.useState('topright');
	const [primaryLengthUnit, setPrimaryLengthUnit] = React.useState('meters');
	const [secondaryLengthUnit, setSecondaryLengthUnit] = React.useState('kilometers');
	const [primaryAreaUnit, setPrimaryAreaUnit] = React.useState('sqmeters');
	const [secondaryAreaUnit, setSecondaryAreaUnit] = React.useState('acres');
	const [activeColor, setActiveColor] = React.useState('#db4a29');
	const [completedColor, setCompletedColor] = React.useState('#9b2d14');

	const onChangePosition = (event) => setPosition(event.target.value);
	const onChangePrimaryLengthUnit = (event) => setPrimaryLengthUnit(event.target.value);
	const onChangeSecondaryLengthUnit = (event) => setSecondaryLengthUnit(event.target.value);
	const onChangePrimaryAreaUnit = (event) => setPrimaryAreaUnit(event.target.value);
	const onChangeSecondaryAreaUnit = (event) => setSecondaryAreaUnit(event.target.value);
	const onChangeActiveColor = (event) => setActiveColor(event.target.value);
	const onChangeCompletedColor = (event) => setCompletedColor(event.target.value);

	const resetOptions = () => {
		setPosition('topright');
		setPrimaryLengthUnit('meters');
		setSecondaryLengthUnit('kilometers');
		setPrimaryAreaUnit('sqmeters');
		setSecondaryAreaUnit('acres');
		setActiveColor('#db4a29');
		setCompletedColor('#9b2d14');
	};

	const measureOptions = {
		position,
		primaryLengthUnit,
		secondaryLengthUnit,
		primaryAreaUnit,
		secondaryAreaUnit,
		activeColor,
		completedColor
	};

	return (
		<div>
		<div className="row d-flex">
			<div className="col-md-8 align-self-stretch">
			<div className="card h-100">
				<div className="card-body h-100">
				<MapContainer {...mapOptions} className="h-100">
					<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
					/>
					<MeasureControl {...measureOptions} />
				</MapContainer>
				</div>
			</div>
			</div>
			<div className="col-md-4">
			<div className="card">
				<div className="card-body">
				<div className="row">
					<div className="col-sm-6">
					<h6 className="mt-1"><i className="fas fa-cogs" /> Options</h6>
					</div>
					<div className="col-sm-6 text-right">
					<button type="button" className="btn btn-sm btn-outline-info" onClick={resetOptions}>
						<i className="fas fa-undo-alt" /> Reset
					</button>
					</div>
				</div>
				<hr/>
				<form>
					<div className="form-group row">
					<label htmlFor="position" className="col-sm-6 col-form-label">Position:</label>
					<div className="col-sm-6">
						<select className="form-control" id="position" value={position} onChange={onChangePosition}>
						<option value="topleft">Top Left</option>
						<option value="topright">Top Right</option>
						<option value="bottomleft">Bottom Left</option>
						<option value="bottomright">Bottom Right</option>
						</select>
					</div>
					</div>
					<div className="form-group row">
					<label htmlFor="primaryLengthUnit" className="col-sm-6 col-form-label">Primary Length Unit:</label>
					<div className="col-sm-6">
						<select className="form-control" id="primaryLengthUnit" value={primaryLengthUnit} onChange={onChangePrimaryLengthUnit}>
						<option value="feet">feet</option>
						<option value="meters">meters</option>
						<option value="miles">miles</option>
						<option value="kilometers">kilometers</option>
						</select>
					</div>
					</div>
					<div className="form-group row">
					<label htmlFor="secondaryLengthUnit" className="col-sm-6 col-form-label">Secondary Length Unit:</label>
					<div className="col-sm-6">
						<select className="form-control" id="secondaryLengthUnit" value={secondaryLengthUnit} onChange={onChangeSecondaryLengthUnit}>
						<option value="feet">feet</option>
						<option value="meters">meters</option>
						<option value="miles">miles</option>
						<option value="kilometers">kilometers</option>
						</select>
					</div>
					</div>
					<div className="form-group row">
					<label htmlFor="primaryAreaUnit" className="col-sm-6 col-form-label">Primary Area Unit:</label>
					<div className="col-sm-6">
						<select className="form-control" id="primaryAreaUnit" value={primaryAreaUnit} onChange={onChangePrimaryAreaUnit}>
						<option value="acres">acres</option>
						<option value="hectares">hectares</option>
						<option value="sqfeet">sqfeet</option>
						<option value="sqmeters">sqmeters</option>
						<option value="sqmiles">sqmiles</option>
						</select>
					</div>
					</div>
					<div className="form-group row">
					<label htmlFor="secondaryAreaUnit" className="col-sm-6 col-form-label">Secondary Area Unit:</label>
					<div className="col-sm-6">
						<select className="form-control" id="secondaryAreaUnit" value={secondaryAreaUnit} onChange={onChangeSecondaryAreaUnit}>
						<option value="acres">acres</option>
						<option value="hectares">hectares</option>
						<option value="sqfeet">sqfeet</option>
						<option value="sqmeters">sqmeters</option>
						<option value="sqmiles">sqmiles</option>
						</select>
					</div>
					</div>
					<div className="form-group row">
					<label htmlFor="activeColor" className="col-sm-6 col-form-label">Active Color:</label>
					<div className="col-sm-6">
						<input type="color" className="form-control" id="activeColor" value={activeColor} onChange={onChangeActiveColor}/>
					</div>
					</div>
					<div className="form-group row">
					<label htmlFor="completedColor" className="col-sm-6 col-form-label">Completed Color:</label>
					<div className="col-sm-6">
						<input type="color" className="form-control" id="completedColor" value={completedColor} onChange={onChangeCompletedColor}/>
					</div>
					</div>
				</form>
				</div>
			</div>
			</div>
		</div>
		<div className="row">
			<div className="col-md-12 mt-4">
			<div className="card">
				<div className="card-body">
				<h4>Installation</h4>
				<hr />
				<h5>Install via NPM</h5>
					<div className="card bg-dark text-white">
						<div className="card-body">
						<code className="text-white">
							npm install react-leaflet-measure --save
						</code>
						</div>
					</div>
				</div>
			</div>
			</div>
		</div>
		<div className="row">
			<div className="col-md-12 mt-4">
			<div className="card">
				<div className="card-body">
				<h4>Usage</h4>
				<hr />

				<h5 className="mt-4">react-leaflet v5</h5>
				<iframe
					style={{ height: '420px', width: '100%' }}
					scrolling="no"
					title="react-leaflet-measure example for react-leaflet@5.x"
					src="https://codepen.io/m_hasbie/embed/LENgzaQ/?height=265&theme-id=0&default-tab=html,result"
					frameBorder="no"
					allowTransparency="true"
					allowFullScreen="true"
				>
					See the Pen <a href='https://codepen.io/m_hasbie/pen/mawyqX/'>react-leaflet-measure example for react-leaflet@2.x</a> by M. Hasbie
					(<a href='https://codepen.io/m_hasbie'>@m_hasbie</a>) on <a href='https://codepen.io'>CodePen</a>.
				</iframe>

				<h5 className="mt-4">react-leaflet v2</h5>
				<iframe
					style={{ height: '420px', width: '100%' }}
					scrolling="no"
					title="react-leaflet-measure example for react-leaflet@2.x"
					src="https://codepen.io/m_hasbie/embed/mawyqX/?height=265&theme-id=0&default-tab=js,result"
					frameBorder="no"
					allowTransparency="true"
					allowFullScreen="true"
				>
					See the Pen <a href='https://codepen.io/m_hasbie/pen/mawyqX/'>react-leaflet-measure example for react-leaflet@2.x</a> by M. Hasbie
					(<a href='https://codepen.io/m_hasbie'>@m_hasbie</a>) on <a href='https://codepen.io'>CodePen</a>.
				</iframe>

				<h5 className="mt-4">react-leaflet v1</h5>
				<iframe
					style={{ height: '420px', width: '100%' }}
					scrolling="no"
					title="react-leaflet-measure example for react-leaflet@1.9.1"
					src="http://codepen.io/m_hasbie/embed/MZoYvN/?height=265&theme-id=0&default-tab=js,result"
					frameBorder="no"
					allowTransparency="true"
					allowFullScreen="true"
				>
					See the Pen <a href='https://codepen.io/m_hasbie/pen/MZoYvN/'>react-leaflet-measure example for react-leaflet@1.9.1</a> by M. Hasbie
					(<a href='https://codepen.io/m_hasbie'>@m_hasbie</a>) on <a href='https://codepen.io'>CodePen</a>.
				</iframe>
				</div>
			</div>
			</div>
		</div>
		<div className="row">
			<div className="col-md-12 mt-4">
			<div className="card">
				<div className="card-body">
				<h4>Options</h4>
				<hr />
				<p>
					Any props passed to MeasureControl are passed down to leaflet-measure.

					Refer <a href="https://github.com/ljagis/leaflet-measure#control-options">leaflet-measure control options</a>.
				</p>
				</div>
			</div>
			</div>
		</div>
		<div className="row">
			<div className="col-md-12 mt-4">
			<div className="card">
				<div className="card-body">
				<h4>Events</h4>
				<hr />

				<table className="table table-hover table-striped table-bordered">
					<thead className="thead-dark">
					<tr>
						<th>Event</th>
						<th>Data</th>
						<th>Description</th>
					</tr>
					</thead>
					<tbody>
					<tr>
						<td className="text-nowrap"><code>onMeasureStart</code></td>
						<td></td>
						<td>Fired when measurement starts.</td>
					</tr>
					<tr>
						<td className="text-nowrap"><code>onMeasureFinish</code></td>
						<td className="text-nowrap"><code>result</code></td>
						<td>
						Fired when measurement finishes with results of the measurement. Results data includes:
						<ul>
							<li>
							<code>area</code>: Area of a polygon measurement in sq meters. 0 for measurements with less than 3 points.
							</li>
							<li>
							<code>areaDisplay</code>: Area formatted as displayed in the popup.
							</li>
							<li>
							<code>lastCoord</code>: Last point clicked in both decimal degrees and degress/min/seconds.
							</li>
							<li>
							<code>length</code>: Length of the measurement in meters. 0 for measurements with less than 2 points.
							</li>
							<li>
							<code>lengthDisplay</code>: Length formatted as displayed in the popup.
							</li>
							<li>
							<code>pointCount</code>: Number of points directly added by the user.
							</li>
							<li>
							<code>points</code>: Array of points as LatLng used to calculate the measurement. Number of items in the array may differ from <code>pointCount</code> because an additional point is added to close polygons during polygon measurements.
							</li>
						</ul>
						</td>
					</tr>
					</tbody>
				</table>
				</div>
			</div>
			</div>
		</div>
		</div>
	);
}

const root = ReactDOMClient.createRoot(document.getElementById('container'));
root.render(<App />);

const { Map, TileLayer, withLeaflet } = ReactLeaflet;
const MeasureControlDefault = ReactLeafletMeasure;
const MeasureControl = withLeaflet(MeasureControlDefault);

class App extends React.Component {
	constructor(props) {
		super(props);
		this.onChangePosition = this.onChangePosition.bind(this);
		this.onChangePrimaryLengthUnit = this.onChangePrimaryLengthUnit.bind(this);
		this.onChangeSecondaryLengthUnit = this.onChangeSecondaryLengthUnit.bind(this);
		this.onChangePrimaryAreaUnit = this.onChangePrimaryAreaUnit.bind(this);
		this.onChangeSecondaryAreaUnit = this.onChangeSecondaryAreaUnit.bind(this);
		this.onChangeActiveColor = this.onChangeActiveColor.bind(this);
		this.onChangeCompletedColor = this.onChangeCompletedColor.bind(this);
		this.resetOptions = this.resetOptions.bind(this);
		
		this.state = {
			mapOptions: {
				center: [2.935403, 101.448205],
				zoom: 10,
				minZoom: 1,
				maxZoom: 22
			},
			position: 'topright',
			primaryLengthUnit: 'meters',
			secondaryLengthUnit: 'kilometers',
			primaryAreaUnit: 'sqmeters',
			secondaryAreaUnit: 'acres',
			activeColor: '#db4a29',
			completedColor: '#9b2d14'
		}
	}
	
	onChangePosition(event) {
		this.setState({ position: event.target.value });
	}
	
	onChangePrimaryLengthUnit(event) {
		this.setState({ primaryLengthUnit: event.target.value });
	}
	
	onChangeSecondaryLengthUnit(event) {
		this.setState({ secondaryLengthUnit: event.target.value });
	}
	
	onChangePrimaryAreaUnit(event) {
		this.setState({ primaryAreaUnit: event.target.value });
	}
	
	onChangeSecondaryAreaUnit(event) {
		this.setState({ secondaryAreaUnit: event.target.value });
	}
	
	onChangeActiveColor(event) {
		this.setState({ activeColor: event.target.value });
	}
	
	onChangeCompletedColor(event) {
		this.setState({ completedColor: event.target.value });
	}
	
	resetOptions(event) {
		this.setState({
			position: 'topright',
			primaryLengthUnit: 'meters',
			secondaryLengthUnit: 'kilometers',
			primaryAreaUnit: 'sqmeters',
			secondaryAreaUnit: 'acres',
			activeColor: '#db4a29',
			completedColor: '#9b2d14'
		});
	}

	render() {
		const {
			mapOptions,
			position,
			primaryLengthUnit,
			secondaryLengthUnit,
			primaryAreaUnit,
			secondaryAreaUnit,
			activeColor,
			completedColor
		} = this.state;
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
				<div class="row d-flex">
					<div class="col-md-8 align-self-stretch">
						<div class="card h-100">
							<div class="card-body h-100">
								<Map {...mapOptions} class="h-100">
									<TileLayer
										attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
										url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
									/>
									<MeasureControl {...measureOptions} />
								</Map>
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="card">
							<div class="card-body">
								<div class="row">
									<div class="col-sm-6">
										<h6 class="mt-1"><i class="fas fa-cogs" /> Options</h6>
									</div>
									<div class="col-sm-6 text-right">
										<button type="button" class="btn btn-sm" onClick={this.resetOptions}><i class="fas fa-undo-alt" /> Reset</button>
									</div>
								</div>
								<hr/>
								<form>
									<div class="form-group row">
										<label for="position" class="col-sm-6 col-form-label">Position:</label>
										<div class="col-sm-6">
											<select class="form-control" id="position" value={position} onChange={this.onChangePosition}>
												<option value="topleft">Top Left</option>
												<option value="topright">Top Right</option>
												<option value="bottomleft">Bottom Left</option>
												<option value="bottomright">Bottom Right</option>
											</select>
										</div>
									</div>
									<div class="form-group row">
										<label for="primaryLengthUnit" class="col-sm-6 col-form-label">Primary Length Unit:</label>
										<div class="col-sm-6">
											<select class="form-control" id="primaryLengthUnit" value={primaryLengthUnit} onChange={this.onChangePrimaryLengthUnit}>
												<option value="feet">feet</option>
												<option value="meters">meters</option>
												<option value="miles">miles</option>
												<option value="kilometers">kilometers</option>
											</select>
										</div>
									</div>
									<div class="form-group row">
										<label for="secondaryLengthUnit" class="col-sm-6 col-form-label">Secondary Length Unit:</label>
										<div class="col-sm-6">
											<select class="form-control" id="secondaryLengthUnit" value={secondaryLengthUnit} onChange={this.onChangeSecondaryLengthUnit}>
												<option value="feet">feet</option>
												<option value="meters">meters</option>
												<option value="miles">miles</option>
												<option value="kilometers">kilometers</option>
											</select>
										</div>
									</div>
									<div class="form-group row">
										<label for="primaryAreaUnit" class="col-sm-6 col-form-label">Primary Area Unit:</label>
										<div class="col-sm-6">
											<select class="form-control" id="primaryAreaUnit" value={primaryAreaUnit} onChange={this.onChangePrimaryAreaUnit}>
												<option value="acres">acres</option>
												<option value="hectares">hectares</option>
												<option value="sqfeet">sqfeet</option>
												<option value="sqmeters">sqmeters</option>
												<option value="sqmiles">sqmiles</option>
											</select>
										</div>
									</div>
									<div class="form-group row">
										<label for="secondaryAreaUnit" class="col-sm-6 col-form-label">Secondary Area Unit:</label>
										<div class="col-sm-6">
											<select class="form-control" id="secondaryAreaUnit" value={secondaryAreaUnit} onChange={this.onChangeSecondaryAreaUnit}>
												<option value="acres">acres</option>
												<option value="hectares">hectares</option>
												<option value="sqfeet">sqfeet</option>
												<option value="sqmeters">sqmeters</option>
												<option value="sqmiles">sqmiles</option>
											</select>
										</div>
									</div>
									<div class="form-group row">
										<label for="activeColor" class="col-sm-6 col-form-label">Active Color:</label>
										<div class="col-sm-6">
											<input type="color" class="form-control" id="activeColor" value={activeColor} onChange={this.onChangeActiveColor}/>
										</div>
									</div>
									<div class="form-group row">
										<label for="completedColor" class="col-sm-6 col-form-label">Completed Color:</label>
										<div class="col-sm-6">
											<input type="color" class="form-control" id="completedColor" value={completedColor} onChange={this.onChangeCompletedColor}/>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12 mt-4">
						<div class="card">
							<div class="card-body">
								<h4>Installation</h4>
								<hr />
								<h5>Install via NPM</h5>
								<div class="card bg-dark text-white">
									<div class="card-body">
										<code class="text-white">
											npm install react-leaflet-measure --save
										</code>
									</div>
								</div>
								
								<h5 class="mt-4">Or include in browser</h5>
								<div class="card bg-dark text-white">
									<div class="card-body">
										<code class="text-white">
											&lt;script src="https://npmcdn.com/react-leaflet-measure/dist/react-leaflet-measure.min.js"&gt;&lt;/script&gt;
										</code>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12 mt-4">
						<div class="card">
							<div class="card-body">
								<h4>Usage</h4>
								<hr />
								<h5>react-leaflet v2</h5>
								<iframe
									style={{ height: '320px', width: '100%' }}
									scrolling="no"
									title="react-leaflet-measure example for react-leaflet@2.x"
									src="https://codepen.io/m_hasbie/embed/mawyqX/?height=265&theme-id=0&default-tab=js,result"
									frameborder="no"
									allowtransparency="true"
									allowfullscreen="true"
								>
									See the Pen <a href='https://codepen.io/m_hasbie/pen/mawyqX/'>react-leaflet-measure example for react-leaflet@2.x</a> by M. Hasbie
									(<a href='https://codepen.io/m_hasbie'>@m_hasbie</a>) on <a href='https://codepen.io'>CodePen</a>.
								</iframe>
								
								<h5 class="mt-4">react-leaflet v1</h5>
								<iframe
									style={{ height: '320px', width: '100%' }}
									scrolling="no"
									title="react-leaflet-measure example for react-leaflet@1.9.1"
									src="http://codepen.io/m_hasbie/embed/MZoYvN/?height=265&theme-id=0&default-tab=js,result"
									frameborder="no"
									allowtransparency="true"
									allowfullscreen="true"
								>
									See the Pen <a href='https://codepen.io/m_hasbie/pen/MZoYvN/'>react-leaflet-measure example for react-leaflet@1.9.1</a> by M. Hasbie
									(<a href='https://codepen.io/m_hasbie'>@m_hasbie</a>) on <a href='https://codepen.io'>CodePen</a>.
								</iframe>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12 mt-4">
						<div class="card">
							<div class="card-body">
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
				<div class="row">
					<div class="col-md-12 mt-4">
						<div class="card">
							<div class="card-body">
								<h4>Events</h4>
								<hr />
								
								<table class="table table-hover table-striped">
									<thead class="thead-dark">
										<tr>
											<th>Event</th>
											<th>Data</th>
											<th>Description</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td class="text-nowrap"><code>onMeasurestart</code></td>
											<td></td>
											<td>Fired when measurement starts.</td>
										</tr>
										<tr>
											<td class="text-nowrap"><code>onMeasurefinish</code></td>
											<td class="text-nowrap"><code>result</code></td>
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
}

ReactDOM.render(<App />, document.getElementById('container'));

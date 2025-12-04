# react-leaflet-measure

[![version](https://img.shields.io/npm/v/react-leaflet-measure.svg?style=plastic)](http://npm.im/react-leaflet-measure)
[![react-leaflet compatibility](https://img.shields.io/npm/dependency-version/react-leaflet-measure/peer/react-leaflet.svg?style=plastic)](https://github.com/mhasbie/react-leaflet-measure)
[![issues](https://img.shields.io/github/issues/mhasbie/react-leaflet-measure.svg?style=plastic)](https://github.com/mhasbie/react-leaflet-measure/issues)
[![downloads](https://img.shields.io/npm/dt/react-leaflet-measure.svg?style=plastic)](http://npm-stat.com/charts.html?package=react-leaflet-measure&from=2018-01-01)
[![MIT License](https://img.shields.io/npm/l/react-leaflet-measure.svg?style=plastic)](http://opensource.org/licenses/MIT)


React wrapper of [leaflet-measure](https://github.com/ljagis/leaflet-measure)
for [react-leaflet](https://github.com/PaulLeCam/react-leaflet).

Coordinate, linear, and area measure control for [Leaflet](http://leafletjs.com) maps. Extends [L.Control](http://leafletjs.com/reference.html#control).

*Tested with React 19.2.0, Leaflet 1.9.4, React-Leaflet 5.0.0, React-Leaflet 4.0.0*


## Demos

[![Demo](http://ljagis.github.io/leaflet-measure/assets/leaflet-measure.png)](http://ljagis.github.io/leaflet-measure)

[`Demo Page`](https://mhasbie.github.io/react-leaflet-measure/)

## Installation

### Install via NPM

```bash
npm install react-leaflet-measure --save
```

## Usage example

```javascript
import { MapContainer, TileLayer } from 'react-leaflet';
import MeasureControl from 'react-leaflet-measure';

const measureOptions = {
  position: 'topright',
  primaryLengthUnit: 'meters',
  secondaryLengthUnit: 'kilometers',
  primaryAreaUnit: 'sqmeters',
  secondaryAreaUnit: 'acres',
  activeColor: '#db4a29',
  completedColor: '#9b2d14',
  captureZIndex: 10000,
  onMeasureStart: (e) => console.log('Measurement started:', e),
  onMeasureFinish: (e) => console.log('Measurement finished:', e),
};
		
<MapContainer center={[101.483459, 2.938926]} zoom={12}>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  />

  <MeasureControl {...measureOptions} />
</Map>
```

### Control options

Any props passed to MeasureControl are passed down to leaflet-measure.

Refer [leaflet-measure control options](https://github.com/ljagis/leaflet-measure#control-options).


## Events

| Event | Data | Description
| --- | --- | ---
| onMeasureStart | this | Fired when measurement starts.
| onMeasureFinish | result | Fired when measurement finishes with results of the measurement.


# Credits
Credits goes to all the [contributors](https://github.com/ljagis/leaflet-measure/graphs/contributors) for the original work.


# License

MIT License

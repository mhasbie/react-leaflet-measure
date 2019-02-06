# react-leaflet-measure

[![version](https://img.shields.io/npm/v/react-leaflet-measure.svg?style=plastic)](http://npm.im/react-leaflet-measure)
[![react-leaflet compatibility](https://img.shields.io/npm/dependency-version/react-leaflet-measure/peer/react-leaflet.svg?style=plastic)](https://github.com/mhasbie/react-leaflet-measure)
[![travis build](https://img.shields.io/travis/mhasbie/react-leaflet-measure.svg?style=plastic)](https://travis-ci.org/mhasbie/react-leaflet-measure)
[![dependencies](https://img.shields.io/david/mhasbie/react-leaflet-measure.svg?style=plastic)](https://david-dm.org/mhasbie/react-leaflet-measure)
[![peer dependencies](https://img.shields.io/david/peer/mhasbie/react-leaflet-measure.svg?style=plastic)](https://david-dm.org/mhasbie/react-leaflet-measure?type=peer)
[![issues](https://img.shields.io/github/issues/mhasbie/react-leaflet-measure.svg?style=plastic)](https://github.com/mhasbie/react-leaflet-measure/issues)
[![downloads](https://img.shields.io/npm/dt/react-leaflet-measure.svg?style=plastic)](http://npm-stat.com/charts.html?package=react-leaflet-measure&from=2018-01-01)
[![MIT License](https://img.shields.io/npm/l/react-leaflet-measure.svg?style=plastic)](http://opensource.org/licenses/MIT)


React wrapper of [leaflet-measure](https://github.com/ljagis/leaflet-measure)
for [react-leaflet](https://github.com/PaulLeCam/react-leaflet).

Coordinate, linear, and area measure control for [Leaflet](http://leafletjs.com) maps. Extends [L.Control](http://leafletjs.com/reference.html#control).

*Tested with Leaflet 1.3.4 and React-Leaflet 1.9.1, React-Leaflet 2.1.4*


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
import { Map, TileLayer } from 'react-leaflet';
import MeasureControl from 'react-leaflet-measure';

const measureOptions = {
  position: 'topright',
  primaryLengthUnit: 'meters',
  secondaryLengthUnit: 'kilometers',
  primaryAreaUnit: 'sqmeters',
  secondaryAreaUnit: 'acres',
  activeColor: '#db4a29',
  completedColor: '#9b2d14'
};
		
<Map center={[101.483459, 2.938926]} zoom={12}>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  />

  <MeasureControl {...measureOptions} />
</Map>
```

### Usage with React-Leaflet v2

This plugin is compatible with version 2 of React-Leaflet, but you have to wrap the `MeasureControl` component using the [`withLeaflet` higher-order component](https://react-leaflet.js.org/docs/en/context.html) to give it access to the new context mechanism. For example:

```javascript
import { Map, withLeaflet } from 'react-leaflet';

// Import to a different variable so you don't have to update the rest of your codes
import MeasureControlDefault from 'react-leaflet-measure';

// Wrap our new variable and assign it to the one we used before. The rest of the codes stays the same.
const MeasureControl = withLeaflet(MeasureControlDefault);
		
<Map center={[101.483459, 2.938926]} zoom={12}>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  />

  <MeasureControl />
</Map>
```

### Control options

Any props passed to MeasureControl are passed down to leaflet-measure.

Refer [leaflet-measure control options](https://github.com/ljagis/leaflet-measure#control-options).


## Events

| Event | Data | Description
| --- | --- | ---
| onMeasurestart | this | Fired when measurement starts.
| onMeasurefinish | result | Fired when measurement finishes with results of the measurement.


# Credits
Credits goes to all the [contributors](https://github.com/ljagis/leaflet-measure/graphs/contributors) for the original work.


# License

MIT License

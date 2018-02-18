# react-leaflet-measure

React wrapper of [leaflet-measure](https://github.com/ljagis/leaflet-measure)
for [react-leaflet](https://github.com/PaulLeCam/react-leaflet).

Coordinate, linear, and area measure control for [Leaflet](http://leafletjs.com) maps. Extends [L.Control](http://leafletjs.com/reference.html#control).

[![Demo](http://ljagis.github.io/leaflet-measure/assets/leaflet-measure.png)](http://ljagis.github.io/leaflet-measure)

## Installation

### Install via NPM

```bash
npm install react-leaflet-measure --save
```

Include leaflet-measure.css stylesheet to your project.

```html
<link rel="stylesheet" href="leaflet-measure.css">
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

### Control options

Any props passed to MeasureControl are passed down to leaflet-measure.

Refer [leaflet-measure control options](https://github.com/ljagis/leaflet-measure#control-options).


# Credits
Credits goes to all the [contributors](https://github.com/ljagis/leaflet-measure/graphs/contributors) for the original work.


# License

MIT License

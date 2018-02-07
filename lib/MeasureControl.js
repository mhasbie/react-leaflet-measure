'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactLeaflet = require('react-leaflet');

var _leaflet = require('leaflet');

var _leaflet2 = _interopRequireDefault(_leaflet);

require('leaflet-measure/dist/leaflet-measure.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MeasureControl = function (_MapControl) {
	_inherits(MeasureControl, _MapControl);

	function MeasureControl() {
		_classCallCheck(this, MeasureControl);

		return _possibleConstructorReturn(this, (MeasureControl.__proto__ || Object.getPrototypeOf(MeasureControl)).apply(this, arguments));
	}

	_createClass(MeasureControl, [{
		key: 'createLeafletElement',
		value: function createLeafletElement(props) {
			// const { minSize = 10, markerCluster, markerOptions, ...options } = props;
			return _leaflet2.default.control.measure(props);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var map = this.context.map;

			this.leafletElement.addTo(map);
		}
	}]);

	return MeasureControl;
}(_reactLeaflet.MapControl);

exports.default = MeasureControl;
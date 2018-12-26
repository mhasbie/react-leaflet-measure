/* eslint-disable */
module.exports = {
	entry: './dist/react-leaflet-measure.min.js',
	output: {
		library: {
			root: 'ReactLeafletMeasure',
			amd: 'react-leaflet-measure',
			commonjs: 'react-leaflet-measure'
		},
		libraryExport: '',
		libraryTarget: 'umd'
	},
	externals: {
		debug: 'debug',
		leaflet: {
			commonjs: 'leaflet',
			commonjs2: 'leaflet',
			root: 'L'
		},
		'react-leaflet': {
			commonjs: 'react-leaflet',
			commonjs2: 'react-leaflet',
			root: 'ReactLeaflet'
		},
		react: {
			commonjs: 'react',
			commonjs2: 'react',
			root: 'React'
		}
	},
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{ 
						loader: 'babel-loader',
						options: {
							presets: ['env', 'react']
						}
					}
				]
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' }
				]
			}
		]
	}
};

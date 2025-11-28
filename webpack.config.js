/* eslint-disable */
const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'react-leaflet-measure.min.js',
		library: {
			root: 'ReactLeafletMeasure',
			amd: 'react-leaflet-measure',
			commonjs: 'react-leaflet-measure'
		},
		libraryExport: 'default',
		libraryTarget: 'umd',
		globalObject: 'this'
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
		'@react-leaflet/core': {
			commonjs: 'react-leaflet',
			commonjs2: 'react-leaflet',
			amd: 'react-leaflet-core',
			root: 'ReactLeafletCore'
		},
		react: {
			commonjs: 'react',
			commonjs2: 'react',
			root: 'React'
		},
		'react-dom': {
			commonjs: 'react-dom',
			commonjs2: 'react-dom',
			root: 'ReactDOM'
		}
	},
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: [
						'@babel/plugin-transform-class-properties'
					]
                }
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
	},
	resolve: {
		extensions: ['.js', '.jsx'], // Allow importing .js and .jsx without extension
	},
};

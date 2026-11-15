const path = require('path');

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, 'tests/e2e/fixture.jsx'),
	output: {
		path: path.resolve(__dirname, '.e2e-build'),
		filename: 'fixture.js',
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
};

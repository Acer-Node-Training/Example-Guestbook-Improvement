var configs = module.exports = {
	entry: {
		app: [
			'./src/js/main.js'
		]
	},
	output: {
		path: __dirname + '/public/js',
		publicPath: '/js',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js?$/,
				loader: 'babel',
				exclude: /(node_modules|bower_components)/,
				query: {
					stage: 0,
					optional: [ 'runtime' ]
				}
			},
		]
	}
};

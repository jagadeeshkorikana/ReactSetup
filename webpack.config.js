module.exports = {
	entry: './ts/index3.tsx',
	
	output: {
		filename: 'react-demo.js',
		path: __dirname+"/bundle"
	},
	
	module: {
		loaders: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				loader: 'ts-loader'
			}
		]
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"]
	},
	devServer: {
		host: '0.0.0.0',
		port: 8080
	}
};
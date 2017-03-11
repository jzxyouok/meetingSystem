const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const rootPath = path.resolve(__dirname);
const appPath = path.resolve(rootPath, 'src');
const buildPath = path.resolve(rootPath, 'build');
const entryFilename = 'Index.jsx';

module.exports = {
	entry: {
		home: path.resolve(appPath, entryFilename),
		vendor: ['react', 'react-dom', 'react-router', 'react-bootstrap']
	},
	output: {
		filename: '[name].js',
		path: buildPath
	},
	devServer: {
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true
	},
	module: {
		loaders: [{
			test: /\.css$/,
			loader: ExtractTextPlugin.extract('style', 'css')
		}, {
			test: /\.scss$/,
			loader: ExtractTextPlugin.extract('style', 'css!sass')
		}, {
			test: /\.jsx$/,
			loader: 'babel',
			exclude: /node_modules/,
			include: path.resolve(__dirname, 'src'),
			query: {
				presets: ['stage-0', 'react', 'es2015']
			}
		}, {
			test: /\.(png|jpe?g|woff|svg|eot|ttf)\??.*$/,
			loader: 'url?limit=8192'
		}]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: '美的厨电会议管理系统',
			filename: 'index.html',
			inject: 'body',
			template: './src/Template/index.html',
			chunks: ['vendor', 'home']
		}),
		new ExtractTextPlugin('style.css'),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		}),
		new webpack.HotModuleReplacementPlugin()
	]
}
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const rootPath = path.resolve(__dirname);
const appPath = path.resolve(rootPath, 'src');
const buildPath = path.resolve(rootPath, 'build');
const entryFilename = 'index.jsx';

module.exports = {
	entry: {
		login: path.resolve(appPath, 'login.jsx'),
		home: path.resolve(appPath, entryFilename),
		vendor: ['react', 'react-dom', 'react-router']
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
			loader: 'style!css?modules&localIdentName=[name]-[local]-[hash:base64:5]'
		}, {
			test: /\.scss$/,
			loader: 'style!css?modules&localIdentName=[name]-[local]-[hash:base64:5]!sass',
		}, {
			test: /\.jsx$/,
			loader: 'babel',
			exclude: /node_modules/,
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
			template: './src/template/index.html',
			chunks: ['vendor', 'home']
		}),
		new HtmlWebpackPlugin({
			title: '会议系统登录',
			filename: 'login.html',
			inject: 'body',
			template: './src/template/login.html',
			chunks: ['vendor', 'login']
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		}),
		new webpack.HotModuleReplacementPlugin()
	]
}





























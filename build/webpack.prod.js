const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.base.js')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = merge(common, {
	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							// you can specify a publicPath here
							// by default it use publicPath in webpackOptions.output
							publicPath: '../'
						}
					},
					{
						loader: 'css-loader',
						options: {
							url: false
						}
					},
					'postcss-loader',
					'sass-loader',
				],
			},
			{
				test: /\.less$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							// you can specify a publicPath here
							// by default it use publicPath in webpackOptions.output
							publicPath: '../'
						}
					},
					{
						loader: 'css-loader',
						options: {
							url: false
						}
					},
					'postcss-loader',
					'less-loader',
				],
			},
			{
				test: /\.styl$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							// you can specify a publicPath here
							// by default it use publicPath in webpackOptions.output
							publicPath: '../'
						}
					},
					{
						loader: 'css-loader',
						options: {
							url: false
						}
					},
					'postcss-loader',
					'stylus-loader',
				],
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					// 图片压缩
					{
						loader: 'image-webpack-loader',
						options: {
							//   bypassOnDebug: true,
							mozjpeg: {
								progressive: true,
								quality: 65
							},
							optipng: {
								enabled: false,
							},
							pngquant: {
								quality: '65-90',
								speed: 4
							},
							gifsicle: {
								interlaced: false,
							}
						},
					},
				]
			},
		]
	},
	optimization: {
		minimizer: [
			new OptimizeCSSAssetsPlugin({})
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist/*'], {
			root: path.resolve(__dirname, '../')
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[hash].css',
			chunkFilename: 'css/[id].[hash].css'
		})
	],
	mode: 'production',
	output: {
		filename: 'js/[name].[contenthash].js',
		path: path.resolve(__dirname, '../dist')
	}
})
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  context: path.resolve(__dirname, './app'),
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './index.jsx'
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name]-[hash].bundle.js',
    publicPath: '/'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './app')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack-React-Redux-Boilerplate',
      template: 'index.tpl.html',
      inject: 'body',
      filename: 'index.html',
      path: 'dist'
    }),
    new ExtractTextPlugin({
      filename: '[name]-[hash].bundle.css',
      allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons-[hash].bundle.js',
      minChunks: 2
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  resolve: {
    extensions: ['.js', '.json', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'eslint-loader',
      include: path.resolve(__dirname, './app'),
      enforce: 'pre'
    }, {
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader'
      })
    }]
  }
};

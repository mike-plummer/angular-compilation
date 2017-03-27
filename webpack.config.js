var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var Dashboard = require('webpack-dashboard');
var DashboardPlugin = require('webpack-dashboard/plugin');
var dashboard = new Dashboard();

module.exports = {
  entry: {
    app: './src/main.ts'
  },
  output: {
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: [
          'ng-router-loader',
          'awesome-typescript-loader',
          'angular2-template-loader',
          ]
      }, {
        test: /\.html$/,
        exclude: ['./src/index.html'],
        loader: 'html-loader'
      }, {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      mangle: true,
      comments: false,
      sourceMap: false,
      compress: {
        warnings: false
      }
    }),

    new HtmlWebpackPlugin({
      title: 'Angular2 Compilation',
      template: 'src/index.html',
      chunks: [ 'app' ]
    }),

    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      __dirname
    ),

    new DashboardPlugin(dashboard.setData)
  ],
  devServer: {
    port: 8000,
    host: 'localhost',
    compress: true,
    quiet: true,
    inline: false
  }
};
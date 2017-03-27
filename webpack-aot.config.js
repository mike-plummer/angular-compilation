var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var BrotliPlugin = require('brotli-webpack-plugin');

var Dashboard = require('webpack-dashboard');
var DashboardPlugin = require('webpack-dashboard/plugin');
var dashboard = new Dashboard();
var path = require('path');

module.exports = {
  entry: {
    app: './src/main-aot.ts'
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
        use: [
          {
            loader: 'ng-router-loader',
            options: {
              aot: true,
              genDir: 'aot'
            }
          },
          'awesome-typescript-loader',
          'angular2-template-loader',
        ]
      }, {
        test: /\.html$/,
        exclude: ['./src/index.html'],
        use: ['html-loader']
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [

    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      comments: false,
      sourceMap: false,
      compress: {
        screw_ie8: true,
        warnings: false
      }
    }),

    new HtmlWebpackPlugin({
      title: 'Angular2 Compilation',
      template: 'src/index.html',
      chunks: [ 'app' ]
    }),

    new BrotliPlugin({
      asset: '[path].br[query]',
      minRatio: 1.0
    }),

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
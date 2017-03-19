var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var BrotliPlugin = require('brotli-webpack-plugin');

var Dashboard = require('webpack-dashboard');
var DashboardPlugin = require('webpack-dashboard/plugin');
var dashboard = new Dashboard();

module.exports = {
  entry: {
    app: './dist/app.js'
  },
  plugins: [

    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      comments: false,
      sourceMap: false,
      compress: {
        warnings: false
      }
    }),

    new HtmlWebpackPlugin({
      title: 'Angular2 Compilation',
      template: 'src/aot/index.html',
      chunksSortMode: 'dependency'
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
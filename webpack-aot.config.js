const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');

const Dashboard = require('webpack-dashboard');
const DashboardPlugin = require('webpack-dashboard/plugin');
const dashboard = new Dashboard();

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
        use: [
          {
            loader:'html-loader',
            options: {
              minimize: true
            }
          }
        ]
      }, {
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              minimize: true
            }
          }
        ]
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
      chunks: [ 'app' ],
      minify: {
        caseSensitive: true
      }
    }),

    // new BrotliPlugin({
    //   asset: '[path].br[query]',
    //   minRatio: 1.0
    // }),

    new DashboardPlugin(dashboard.setData)
  ],
  devServer: {
    port: 8000,
    host: 'localhost',
    compress: true,
    quiet: true,
    inline: false,
    historyApiFallback: true
  }
};
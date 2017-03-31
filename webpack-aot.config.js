const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
const RemoveAssetsPlugin = require('remove-assets-webpack-plugin');

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
        test: /\.html$/,
        exclude: /index\.html$/,
        loader: 'ignore-loader'
      },
      {
        test: /\.css$/,
        loader: 'ignore-loader'
      },
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
          'awesome-typescript-loader'
        ]
      }
    ]
  },
  plugins: [
    new DashboardPlugin(dashboard.setData),

    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      comments: false,
      sourceMap: false,
      compress: {
        screw_ie8: true,
        warnings: false
      }
    }),

    // new BrotliPlugin({
    //   asset: '[path].br[query]',
    //   minRatio: 1.0
    // }),
    //
    // new RemoveAssetsPlugin(/\.js$/),

    new HtmlWebpackPlugin({
      title: 'Angular2 Compilation',
      template: 'src/index.html',
      chunks: [ 'app' ],
      minify: {
        caseSensitive: true
      }
    })
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
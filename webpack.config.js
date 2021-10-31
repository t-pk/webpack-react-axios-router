const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const customizeTheme = require('./src/customizeTheme');
const path = require('path');

const port = process.env.PORT || 3000;

module.exports = {
  mode: 'development',
  entry: ['@babel/polyfill', './src/index.jsx'],

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:8].js',
    sourceMapFilename: '[name].[hash:8].map',
    chunkFilename: '[id].[hash:8].js',
  },

  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },

  devtool: 'hidden-source-map',

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [{ loader: 'file-loader' }],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                // If you are using less-loader@5 please spread the lessOptions to options directly
                modifyVars: customizeTheme,
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.png',
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],

  devServer: {
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    open: true,
  },

  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },

  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: 'all',
      cacheGroups: {
        default: false,
      },
    },
  },
};

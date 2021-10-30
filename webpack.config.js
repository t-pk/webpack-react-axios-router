const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const customizeTheme = require('./src/customizeTheme');

const port = process.env.PORT || 3000;

module.exports = {
  mode: 'development',
  entry: ['@babel/polyfill', './src/index.jsx'],

  output: {
    filename: 'TaiPham.[hash].js',
    chunkFilename: '[name].[chunkhash].bundle.js',
    publicPath: '/',
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
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
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
  // optimization: {
  //   runtimeChunk: {
  //     name: (entrypoint) => `runtimechunk~${entrypoint.name}`,
  //   },
  // },
};

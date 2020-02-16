require('@babel/polyfill');
require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const customizeTheme = require('./src/customizeTheme');
const packageJson = require('./package.json');
const regexParser = require('regex-parser');
const shortid = require('shortid');
const port = process.env.PORT || 3000;

module.exports = {
  mode: process.env.MODE || 'development',
  entry: ['@babel/polyfill', './src/index.js'],

  output: {
    filename: 'TaiPham.[hash].js',
    chunkFilename: '[name].[chunkhash].bundle.js',
    publicPath: '/',
  },

  devtool: 'inline-source-map',
  //========================================================
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      //========================================================
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localsConvention: 'camelCase',
              sourceMap: true,
            },
          },
        ],
      },
      //========================================================
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      //========================================================
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      //========================================================
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
              modifyVars: customizeTheme, // if(customizeTheme.Endpoint === js) => use can .less design UI. reserve use scss.
              //{hack:      `true; @import "customizeTheme.less"`}
              javascriptEnabled: true,
            },
          },
        ],
      },
    ],
  },
  //========================================================
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.png',
    }),
  ],
  //========================================================
  devServer: {
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    open: true,
  },
  //========================================================
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },

  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: chunkNodeModule(),
    },
  },
};

function chunkNodeModule() {
  let regex = `/[\\\\/]node_modules[\\\\/]({values})[\\\\/]/`;
  let dependencies = Object.keys(packageJson.dependencies);
  let devDependencies = Object.keys(packageJson.devDependencies);
  let bundles = {};
  let reserve = '';

  if (dependencies.length > 0) {
    for (let i = 0; i < dependencies.length; i++) {
      bundles['vendor_Chunk_' + shortid()] = {
        test: regexParser(regex.replace('{values}', dependencies[i])),
        name: 'vendor_Chunk_' + shortid(),
      };
      reserve = reserve.concat(`(!${dependencies[i]})`);
    }
  }

  if (devDependencies && devDependencies.length > 0) {
    for (let i = 0; i < devDependencies.length; i++) {
      bundles['vendor_Dev_' + shortid()] = {
        test: regexParser(regex.replace('{values}', devDependencies[i])),
        name: 'vendor_Dev_' + shortid(),
      };
      reserve = reserve.concat(`(!${devDependencies[i]})`);
    }
  }

  bundles.othersVendor = {
    test: regexParser(regex.replace('({values})', reserve)),
    name: 'othersVendor',
  };

  return bundles;
}

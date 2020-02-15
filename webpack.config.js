require("@babel/polyfill");
require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const port = process.env.PORT || 3000;
const configTheme = require('./src/configTheme');
const packageJson = require('./package.json');
const regexParser = require('regex-parser');
const shortid = require('shortid');

module.exports = {
  mode: process.env.mode || "development",
  entry: ["@babel/polyfill", "./src/index.js"],

  output: {
    filename: "TaiPham.[hash].js",
    chunkFilename: '[name].[chunkhash].bundle.js',
    publicPath: '/',
  },

  devtool: "inline-source-map",
  //========================================================
  module: {
    rules: [{
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      //========================================================
      {
        test: /\.css$/,
        use: [{
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              localsConvention: "camelCase",
              sourceMap: true
            }
          }
        ]
      },
      //========================================================
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: "file-loader"
        }]
      },
      //========================================================
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      //========================================================
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }, {
          loader: 'less-loader',
          options: {
            modifyVars: configTheme // if(configTheme.Endpoint === js) => use can .less design UI. reserve use scss.
              //{hack:      `true; @import "configTheme.less"`}
              ,
            javascriptEnabled: true,
          },
        }]
      }

    ]
  },
  //========================================================
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      favicon: "public/favicon.png"
    })
  ],
  //========================================================
  devServer: {
    host: "localhost",
    port: port,
    historyApiFallback: true,
    open: true
  },
  //========================================================
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  //!tao ra 1 function sau do loop file package.json roi return ve object bo vao day.
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: chunkNodeModule()
    },
  }
};


function chunkNodeModule() {
  let regex = `/[\\\\/]node_modules[\\\\/]({values})[\\\\/]/`;
  let dependencies = Object.keys(packageJson.dependencies);
  let devDependencies = Object.keys(packageJson.devDependencies);
  let objects = {};
  let reserve = "";
  if (dependencies.length > 0) {
    dependencies.map((item, index) => {
      let a = (regex.replace('{values}', item)).replace();
      objects['vendor_Chunk_' + shortid()] = {
        test: regexParser(a),
        name: "vendor_Chunk_" + shortid()
      };
      reserve = reserve.concat(`(!${item})`);
    })

    if (devDependencies && devDependencies.length > 0) {
      devDependencies.map((item, index) => {
        objects['vendor_Dev_' + shortid()] = {
          test: regexParser(regex.replace('{values}', item)),
          name: "vendor_Dev_" + shortid()
        };
        reserve = reserve.concat(`(!${item})`);
      })
    }

    objects.othersVendor = {
      test: regexParser(regex.replace('({values})', reserve)),
      name: "othersVendor"
    }
    return objects;
  }
}
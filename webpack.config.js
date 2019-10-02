require("@babel/polyfill");
require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const port = process.env.PORT || 3000;

module.exports = {
  mode:                        "development",
  entry:                       ["@babel/polyfill", "./src/index.js"],
  output: {
    filename:                  "bundle.[hash].js"
  },
  devtool:                     "inline-source-map",

  module: {
    rules: [
      {
        test:                   /\.(js)$/,
        exclude:                /node_modules/,
        use:                    ["babel-loader"]
      },

      {
        test:                    /\.css$/,
        use: [
          {
            loader:             "style-loader"
          },
          {
            loader:             "css-loader",
            options: {
              modules:          true,
              localsConvention: "camelCase",
              sourceMap:        true
            }
          }
        ]
      },

      {
        test:                   /\.(png|jpg|gif)$/,
        use: [
          {
            loader:             "file-loader"
          }
        ]
      },
      {
        test:                    /\.s[ac]ss$/i,
        use: [
                                'style-loader',
                                'css-loader',
                                'sass-loader',
        ],
      },

      {
        test:                    /\.less$/,
        use: [
          {
          loader:                'style-loader',
        }, {
          loader:                'css-loader',
        }, {
          loader:                'less-loader',
          options: {
            modifyVars: {
              hack:              `true; @import "configTheme.less"`
            },
            javascriptEnabled:    true,
          },
        }]
      }

    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template:                   "public/index.html",
      favicon:                    "public/favicon.png"
    })
  ],

  devServer: {
    host:                         "localhost",
    port:                         port,
    historyApiFallback:           true,
    open:                         true
  }
};

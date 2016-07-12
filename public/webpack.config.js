var webpack = require("webpack");
var nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: "./test.js",
    target: 'node',
    externals: [nodeExternals()],
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: "style!css"
        }, {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel', // 'babel-loader' is also a legal name to reference
            query: {
                presets: ['es2015']
            }
        }]
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
          minimize: true,
          compress: {
              warnings: false
          }
      })
    ]
};

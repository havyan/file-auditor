var webpack = require("webpack");
var path = require("path");

module.exports = {
    entry: "./app.js",
    target: 'node',
    output: {
        path: path.resolve(__dirname, "production"),
        filename: "app.js"
    },
    devtool: 'inline-source-map',
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

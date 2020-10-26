var path = require("path");

var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "bundle.js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                query: {
                    exclude: /node_modules/,
                    sourceMaps: true,
                    presets: [
                        [
                            "@babel/preset-env",
                            {
                                useBuiltIns: "usage",
                                corejs: 3
                            },
                        ],
                        "@babel/preset-react"
                    ],
                    plugins: [
                        "@babel/plugin-proposal-class-properties"
                    ]
                }

            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.template.html",
            publicPath: "/",
            filename: "index.html",
            inject: true
        })
    ]
}
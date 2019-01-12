const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(pug)$/,
                include: path.join(__dirname, 'src/index.pug'),
                use: {
                    loader: "pug-loader"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src','index.pug'),
            filename: "index.html",
            inject: true
        })
    ]
}
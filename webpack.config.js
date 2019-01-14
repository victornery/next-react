const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            components: path.resolve(__dirname, 'src/components/')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.pug$/,
                include: path.join(__dirname, 'src/index.pug'),
                use: {
                    loader: 'pug-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                        modules: true,
                        sourceMap: true,
                        localIdentName: 'next-[local]___[hash:base64:5]'
                    }
                }]
            },
            {
                test: /\.(eot|ttf|woff(2)?|png|svg)$/,
                exclude: /node_modules/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src','index.pug'),
            minify: true,
            hash: true
        })
    ]
}
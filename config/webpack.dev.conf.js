const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].bundle.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
            inject: 'body',
            minify: {
                removeComments: true
            }
        }),
    ],
    module: {
        rules: [
            { test: /\.less$/, use:['style-loader','css-loader', 'less-loader'] },
            { test: /\.html$/, use: 'html-loader' },
            { test: /\.ejs$/, use: 'ejs-loader' },
            { test: /\.(png|jpg|gif|svg)$/, use: 'file-loader' }
        ]
    },
    mode: 'development'
}
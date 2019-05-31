const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname,'../src/js/index.js'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name]-[chunkhash].js'
    },
    plugins: [
        // 自动清理dist目录
        new CleanWebpackPlugin(),
        // 生成一个HTML文件，并自动注入所有生成的bundle
        new HtmlWebpackPlugin({template: path.resolve(__dirname,'../src/html/index.html')})
    ],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },
    mode: 'development'
}
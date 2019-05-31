const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname,'../src/js/index.js'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name]-[chunkhash].js'
    },
    plugins: [
        // 自动清理dist目录
        new CleanWebpackPlugin()
    ],
    mode: 'development'
}
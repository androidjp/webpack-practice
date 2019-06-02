const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: {
        hello_world: path.resolve(__dirname,'../src/js/index.js'),
        home: path.resolve(__dirname,'../src/js/vender/HomeText.js'),
        article: path.resolve(__dirname,'../src/js/vender/ArticleText.js'),
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name]-[chunkhash].js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        // 生成一个HTML文件，并自动注入所有生成的bundle
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'../src/html/index.html'),
            filename: 'helloWorld.html',
            title: 'HelloWorld',
            chunks: ['hello_world'],
            date: new Date()
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'../src/html/index.html'),
            filename: 'home.html',
            inject: 'body',
            title: 'Home',
            chunks: ['home'],
            date: new Date()
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'../src/html/index.html'),
            filename: 'article.html',
            title: 'Acticle',
            chunks: ['article'],
            date: new Date(),
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        }),
    ],
    mode: 'development'
}
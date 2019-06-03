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

            // file-loader
            // { test: /\.(png|jpg|gif|svg)$/,
            //     loader: 'file-loader',
            //     options: {
            //         name: 'assets/[name]-[hash:5].[ext]'
            //     }
            // },
            
            // url-loader
            // { test: /\.(png|jpg|gif|svg)$/,
            //     loader: 'url-loader',
            //     options: {
            //         limit: 20000,
            //         name: 'assets/[name]-[hash:5].[ext]'
            //     }
            // }

            // image-webpack-loader
            // { test: /\.(png|jpg|gif|svg)$/,
            //     loaders: [
            //         {
            //             loader: 'url-loader',
            //             options: {
            //                 limit: 20000,
            //                 name: 'assets/[name]-[hash:5].[ext]'
            //             }
            //         },
            //         'image-webpack-loader'
            //     ]
            // }

            // 简易写法
            { 
                test: /\.(png|jpg|gif|svg)$/,
                loaders: [
                    'url-loader?limit=20000&name=asserts/[name]-[hash:5].[ext]',
                    'image-webpack-loader'
                ]
            }
        ]
    },
    mode: 'development'
}
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    // 入口文件(可以有多个入口)
    entry: {
        app: './src/index.js'
    },
    
    // 输出
    output: {
        path: path.resolve(__dirname, '../dist'),   // 输出路径
        filename: '[name].[hash].bundle.js',        // 文件名(其中[xxx]为占位符)
    },

    // 配置 webpack-dev-server
    devServer: {
        port: 3000
    },

    module: {
        // 配置webpack的多个loader程序，用于处理不同类型的资源
        rules: [
            // 处理高版本的JS(ES6)
            {
                // test是要处理的文件名模式： 以 .js 结尾
                test: /\.js$/,
                // exclude是要跳过，不作处理的目录
                exclude: /(node_modules|bower_components)/,
                // use是要使用的loader程序(值类型可以是 string|object )
                // use: 'babel-loader',
                use: {
                    loader: 'babel-loader',
                    options: {
                        // babel预设环境的插件集
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            // 处理图片资源
            {
                test: /\.(png|jpg|gif)/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[path][name].[ext]',
                            useRelativePath: process.env.NODE_ENV === 'production',
                            limit: 8192,    // 8KB以内的图片会被转换为Base64编码到JS文件中
                            fallback: 'file-loader' // 大于limit的图片，用fallback指定的loader程序处理
                        }
                    }
                ]
            },
            // 处理CSS资源
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                ]
            },
        ]
    },

    // 插件配置
    plugins: [
        new HtmlWebpackPlugin({ template: 'public/index.html' }),
    ],

};
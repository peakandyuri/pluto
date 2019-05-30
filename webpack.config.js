const { resolve } = require('path');
//html生成插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
//css处理插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//打包清理目录插件
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: './bundle.js',
        chunkFilename: '[name].[chunkhash].js',
        path: resolve(__dirname, './dist')
    },
    //mode: 'development',    //production
    resolve: {
        extensions: ['.ts', '.tsx', ".js"],
        alias: {
            "@": resolve(__dirname, "./src")
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', "@babel/preset-react"],
                        plugins: [
                            "@babel/plugin-syntax-dynamic-import",
                            ["import", { "libraryName": "antd", "style": "css" }]
                        ]
                    }
                }
            },
            {
                test: /\.tsx?$/, loader: 'ts-loader'
            },
            {
                test: /\.(css|less)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                            hmr: process.env.NODE_ENV === 'development',    //模块热替换
                        }
                    },
                    'css-loader',
                    'less-loader'
                ],
            },
            {
                test: /\.(jpg|png)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        name: "[chunkhash].[ext]",
                        outputPath: "assets/images",
                        context: './',
                        limit: 8192         //8KB
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `./src/index.ejs`,
            filename: './index.html',
            title: "李成竹园",
            hash: true,
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[id].[chunkhash].css',
        }),
        new CleanWebpackPlugin()
    ],
    // optimization: {
    //     splitChunks: {
    //         cacheGroups: {
    //             styles: {
    //                 name: 'styles',
    //                 test: /\.css$/,
    //                 chunks: 'all',
    //                 enforce: true,
    //             },
    //         },
    //     },
    // },
    devServer: {
        contentBase: "./dist"
    }
}
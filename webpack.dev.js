const { resolve } = require('path');
//html生成插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
//css处理插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require("webpack");

module.exports = {
    devtool: "#source-map",
    entry: [
        "./src/index.tsx"
    ],
    output: {
        filename: 'bundle.[hash].js',
        chunkFilename: '[name].[chunkhash].js',
        path: resolve(__dirname, './dist'),
        publicPath: "/"
    },
    performance: { hints: false },
    mode: 'development',    //production
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
                        name: "[hash].[ext]",
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
            //hash: true,
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[id].[chunkhash].css',
        }),
        new webpack.DefinePlugin({
            product: false
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'async',
                    enforce: true,
                },
                vendor: {
                    test: /node_modules/,
                    chunks:'initial',
                    name: 'vendor',
                    priority: 10,
                    enforce: true
                }
            },
        },
    },
    devServer: {
        contentBase: "./dist",
        index: "index.html",
        historyApiFallback: true,       //有路由时刷新页面不会报404
        progress : true,                //处理进度
        hot: true,                      //热更新
        compress: true,                 //压缩
        //port: 8080
    }
}
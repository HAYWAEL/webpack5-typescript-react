/*
 * @Date: 2021-03-16 18:57:46
 * @LastEditors: HAYWAEL
 * @LastEditTime: 2021-03-16 19:49:58
 * @FilePath: /webpack5-demo/config/webpack.common.ts
 */
import webpack from 'webpack';
import paths from './paths';
import HtmlWebpackPlugin from "html-webpack-plugin";
const scriptRegex =/\.(ts|js)x?$/i;
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;
const imageInlineSizeLimit = 4 * 1024;

export default (conf:webpack.Configuration):webpack.Configuration=>{
    
    return {
        mode: conf.mode,
        entry: conf.entry,
        output:conf.output,
        cache: {
            type: 'filesystem'//memory:使用内存缓存；filesystem：文件缓存
        },
        devtool: false,
        module: {
            rules: [
                {
                    test: scriptRegex,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: [
                                    "@babel/preset-env",
                                    "@babel/preset-react",
                                    "@babel/preset-typescript",
                                ]
                            }
                        }
                    ]
                },
                {
                    test: cssRegex,
                    exclude: cssModuleRegex,
                    use: ['style-loader', {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1 // 0 => 无 loader(默认); 1 => postcss-loader; 2 => postcss-loader, sass-loader
                        }
                    }, 'postcss-loader'],
                },
                {
                    test: sassRegex,
                    exclude: sassModuleRegex,
                    use: ['style-loader', {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1 // 查询参数 importLoaders，用于配置「css-loader 作用于 @import 的资源之前」有多少个 loader
                        }
                    }, 'postcss-loader', 'sass-loader'],
                },
                {
                    test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                    type: 'asset',
                    parser: {
                        dataUrlCondition: {
                            maxSize: imageInlineSizeLimit // 4kb
                        }
                    }
                },
                {
                    test: /\.(eot|svg|ttf|woff|woff2?)$/,
                    type: 'asset/resource'
                }


            ]
        },
        devServer: {},
        plugins: [
            new HtmlWebpackPlugin({
                template: './public/index.html'
            }),
            ...conf.plugins||[]
        ],
        stats: conf.stats,
        resolve: {
            modules: [paths.appNodeModules],
            extensions: ['.ts', '.tsx', '.css','.js'],
            alias: {
                moment$: 'moment/moment.js',
                '@src': paths.appSrc,
                '@public': paths.appPublic,
            },
        }
    }

}
/*
 * @Date: 2021-03-16 14:06:22
 * @LastEditors: HAYWAEL
 * @LastEditTime: 2021-03-16 19:41:43
 * @FilePath: /webpack5-demo/config/webpack.dev.config.ts
 */
import common from './webpack.common'
import webpack from "webpack";
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ESLintPlugin from "eslint-webpack-plugin";



export default common({
    mode: "development",
    output: {
        publicPath: "/",
    },
    entry: "./src/index.tsx",
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ForkTsCheckerWebpackPlugin({
            async: false
        }),
        new ESLintPlugin({
            extensions: ["js", "jsx", "ts", "tsx"],
        }),
    ],
    devtool: "inline-source-map",
    stats:'errors-only'
})
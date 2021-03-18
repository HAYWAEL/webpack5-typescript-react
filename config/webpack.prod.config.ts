/*
 * @Date: 2021-03-16 14:40:32
 * @LastEditors: HAYWAEL
 * @LastEditTime: 2021-03-16 20:00:37
 * @FilePath: /webpack5-demo/config/webpack.prod.config.ts
 */
import paths from './paths';
import common from './webpack.common'
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

export default common({
    mode: "production",
    output: {
        path: paths.appBuild,
        filename: "[name].[contenthash].js",
        publicPath: "",
    },
    entry: "./src/index.tsx",
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            async: false,
        }),
        new ESLintPlugin({
            extensions: ["js", "jsx", "ts", "tsx"],
        }),
        new CleanWebpackPlugin(),

    ],
    devtool: 'source-map',
    stats: 'normal'
})
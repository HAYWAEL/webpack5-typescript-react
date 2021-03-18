/*
 * @Date: 2021-03-16 19:28:19
 * @LastEditors: HAYWAEL
 * @LastEditTime: 2021-03-16 19:53:10
 * @FilePath: /webpack5-demo/server/index.ts
 */
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

import config from '../config/webpack.dev.config';
import logger from './logger';

import appConfig from './appConfig';

const { port, host } = appConfig; // 监听的端口号
const compiler = webpack(config);
//  devServer 参数
const devServerOptions = Object.assign({}, config.devServer, {
    open: true, // 自动打开浏览器
    compress: true, // gzip 压缩
    stats: "minimal",
    hot: true
});
const server = new WebpackDevServer(compiler, devServerOptions);

server.listen(port, host, async (err) => {
    if (err) {
        return logger.error(err.message);
    }
    logger.appStarted(port, "127.0.0.1",false);
});
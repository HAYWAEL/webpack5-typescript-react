/*
 * @Date: 2021-03-16 19:30:30
 * @LastEditors: HAYWAEL
 * @LastEditTime: 2021-03-16 19:48:36
 * @FilePath: /webpack5-demo/server/logger.ts
 */
import ip from 'ip';
import chalk from 'chalk';
const divider = chalk.gray("\n-----------------------------------");

const logger={
    error: (err: unknown) => {
        console.error(chalk.red(err))
    },
    appStarted: (port: any, host: any, tunnelStarted: unknown) => {
        console.log(`Server started ! ${chalk.green("✓")}`);
        if (tunnelStarted) {
            console.log(`Tunnel initialised ${chalk.green("✓")}`);
        }
        console.log(`
${chalk.bold("Access URLs:")}${divider}
Localhost: ${chalk.magenta(`http://${host}:${port}`)}
LAN: ${chalk.magenta(`http://${ip.address()}:${port}`) +
            (tunnelStarted
        ? `\n    Proxy: ${chalk.magenta(tunnelStarted)}`
        : "")
    }${divider}
${chalk.blue(`Press ${chalk.italic("CTRL-C")} to stop`)}
    `);



    }
}
export default logger
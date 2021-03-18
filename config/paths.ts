/*
 * @Date: 2021-03-16 15:56:52
 * @LastEditors: HAYWAEL
 * @LastEditTime: 2021-03-16 19:47:49
 * @FilePath: /webpack5-demo/config/paths.ts
 */
import path from 'path';
import fs from 'fs';

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath:string):string => path.resolve(appDirectory, relativePath);
const moduleFileExtensions=['js','jsx','ts','tsx','json'];

const resolveModule=(resolveFn: { (relativePath: string): string; (arg0: string): fs.PathLike; },filePath:string)=>{
    const extension=moduleFileExtensions.find((extension)=>{
        return fs.existsSync(resolveFn(`${filePath}.${extension}`))
    });
    if(extension){
        return resolveFn(`${filePath}.${extension}`)
    }
    return resolveFn(`${filePath}.js`)
}

export  default{
    appBuild:resolveApp('build'),
    appPublic:resolveApp('public'),
    appHtml:resolveApp('public/index.html'),
    appIndexJS:resolveModule(resolveApp,'src/index'),
    appNodeModules:resolveApp('node_modules'),
    appSrc:resolveApp('src'),
    moduleFileExtensions,
}
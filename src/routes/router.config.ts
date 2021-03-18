/*
 * @Date: 2021-03-17 15:03:28
 * @LastEditors: HAYWAEL
 * @LastEditTime: 2021-03-17 16:38:56
 * @FilePath: /webpack5-demo/src/routes/router.config.ts
 */
export default[
    {
        path:'/',
        component: '../pages/home',
        name:'index',
        children:[
            {
                path:'/home',
                component: '../pages/home',
                name:'home'
            }
        ]
        
    }
]
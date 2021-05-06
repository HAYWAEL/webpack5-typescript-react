/*
 * @Date: 2021-03-16 11:42:25
 * @LastEditors: HAYWAEL
 * @LastEditTime: 2021-03-19 13:46:33
 * @FilePath: /webpack5-demo/src/index.tsx
 */
import React from 'react';
import ReactDom from "react-dom";
import './style.scss'
import Layout from './layout';




ReactDom.render(
    <React.StrictMode>
        <Layout/>    
    </React.StrictMode> ,
    document.getElementById('root')
)
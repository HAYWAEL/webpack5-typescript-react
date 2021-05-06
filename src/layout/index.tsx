/*
 * @Date: 2021-03-18 15:41:01
 * @LastEditors: HAYWAEL
 * @LastEditTime: 2021-03-19 13:50:55
 * @FilePath: /webpack5-demo/src/layout/index.tsx
 */
import React from 'react';
import { Layout, Button } from 'antd';
import BasicRoute from '../pages/basicRoute';


const { Header, Footer, Content } = Layout;


import './index.scss'

const types = [{
    id: 1,
    label: 'jihsu'
},
{
    id: 2,
    label: 'shenghuoegrgwrgerghehrerherth'
},{
    id: 3,
    label: 'shenghuo'
},{
    id: 4,
    label: 'shenghuo'
},{
    id: 5,
    label: 'shenghuo'
},{
    id: 6,
    label: 'shenghuo'
},{
    id: 7,
    label: 'shenghuo'
}]

const Home: React.FC = () => {
    return (
        <Layout className="layout">
            <Header className="header">
                <div className="top">
                    <Button className="logo">Subscribe</Button>
                    <h2 className='name'>HAY</h2>
                    <div className="panel">
                        search
                    </div>
                </div>
                <div className="nav">
                    {types.map(tab=>(
                        <p key={tab.id}><span>{tab.label}</span></p>
                    ))}
                </div>

            </Header>
            <Content className='content'>
            <BasicRoute/>
            </Content>
            <Footer className="footer">Footer</Footer>
        </Layout>
    )
}
export default Home
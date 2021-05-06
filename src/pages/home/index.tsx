/*
 * @Date: 2021-03-17 14:33:16
 * @LastEditors: HAYWAEL
 * @LastEditTime: 2021-03-18 15:43:19
 * @FilePath: /webpack5-demo/src/pages/home/index.tsx
 */
import React,{useState,useEffect} from 'react';

import "./index.scss";


const colors = ["#D83C3C", "#D64D4D", "#C25F3F", "#B66A3F", "#C27E3F", "#D4A65A", "#929448", "#727428"]

const App = () => {
    const [index, setIndex] = useState(0);
   
    useEffect(() => {
        const id = setInterval(() => {
            setIndex(c => c === colors.length - 1?0:c + 1);
        }, 1000);
        return () => clearInterval(id);
    },[])
    return <div className="container">
        <section className="header">A web developer in Hangzhou.</section>
        <a href="mailto:liuhaihua420@outlook.com" id="circle" style={{ backgroundColor: colors[index] }} >
            <span className="content">
                E-Mail
			  </span>
        </a>
    </div>
}
export default App
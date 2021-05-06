/*
 * @Date: 2021-03-19 13:53:51
 * @LastEditors: HAYWAEL
 * @LastEditTime: 2021-03-19 14:09:28
 * @FilePath: /webpack5-demo/src/routes/nestedRouting.tsx
 */
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from 'react-router-dom';

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Topics(){
    const match=useRouteMatch();
    console.log(match)
    return(
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/components`}>Compontents</Link>
    
                </li>
                <li>
                <Link to={`${match.url}/props-v-state`}>Props.v State</Link>
                </li>
            </ul>
            <Switch>
                <Route path={`${match.path}/`}>

                </Route>
            </Switch>
        </div>
    )
}

const App: React.FC = (): React.ReactElement => {
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">Aobut</Link></li>
                    <li><Link to="/topics">Topics</Link></li>
                </ul>
                <Switch>
                    <Route >

                    </Route>
                    <Route path='about'>
                        <About />
                    </Route>
                    <Route path='/'>
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}
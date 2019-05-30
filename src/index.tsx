import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import './index.css';

declare var product;

const App = React.lazy(() => import("./layout/base-layout"));

const children = (
    <React.Suspense fallback={<div>页面正在加载</div>}>
        <App />
    </React.Suspense>
);


ReactDOM.render((
    <>
        {
            product ? <HashRouter children={children}/> : <BrowserRouter children={children}/>
        }
    </>
), document.getElementById("root"));
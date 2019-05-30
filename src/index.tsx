import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Main = React.lazy(()=>import("./components/example"));

ReactDOM.render((
    
    <React.Suspense fallback={<div>页面正在加载</div>}>
        <Main />
    </React.Suspense>
), document.getElementById("root"));
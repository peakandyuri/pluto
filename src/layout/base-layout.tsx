import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

import Main from '@/routes/main';
import Example from '@/routes/example';

export default function BaseLayout() {

    return (
        <div>
            <div>
                <Link to="/">首页</Link>
                &nbsp;
                <Link to="/example">示例</Link>
            </div>
            <div>
                <Switch>
                    <Route path="/" exact component={Main} />
                    <Route path="/example" exact component={Example} />
                </Switch>
            </div>
        </div>
    );
}
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Details from './components/Details/Details';


export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/details/:id" component={Details} />
        </Switch>
    )
}

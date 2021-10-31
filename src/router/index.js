import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { Home, Results } from './../pages';

function Router() {
    return (
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route path='/results'>
                <Results />
            </Route>
        </Switch>
    );
}

export default Router
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Game from './components/Game';
import Home from './components/Home';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/game" component={Game}/>
                <Route component={Home} />
            </Switch>
        </BrowserRouter>
    );
}
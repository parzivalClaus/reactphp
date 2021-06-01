import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Cars from '../pages/Cars';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Cars} />
        </Switch>
    );
}
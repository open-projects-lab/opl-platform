import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {UserRegistration, ProfileDetail} from './apps';

export default (
    <Switch>
        <Route exact path="/" render={() => <Redirect to="/register"/>}/>
        <Route exact path="/register" component={UserRegistration}/>
        <Route exact path="/profile" component={ProfileDetail}/>
    </Switch>
);
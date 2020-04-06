import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'

import Login from './pages/Login'
import Profile from './pages/Profile'
import Collection from './pages/Collection'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/Profile" exact component={Profile} />
                <Route path="/Collection" exact component={Collection} />
            </Switch>
        </BrowserRouter>
    )
}
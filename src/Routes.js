import React from 'react'
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom'

import Menu from './core/Menu'
import Home from './core/Home'
import Login from './core/user/Login'
import Advert from './core/Advert'
import ProductsByCategory from './core/ProductsByCategory'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Route path="/ads/:advertId" exact component={Advert} />
                <Route path="/c/:grandparent/:parent/:child" exact component={ProductsByCategory} />
                <Route path="/c/:parent/:child" exact component={ProductsByCategory} />
                <Route path="/c/:child" exact component={ProductsByCategory} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
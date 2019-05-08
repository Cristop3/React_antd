import React from 'react';
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom';
import Login from '../component/business/login.jsx';
import App from '../App';

const RouterConfig = (
    <BrowserRouter>
        <Switch>
            <Route exact path="/login" component={Login}/>
            <Route path='/app' component={App} />
            <Redirect from='/' to='/app' />
        </Switch>
    </BrowserRouter>
)

export default RouterConfig
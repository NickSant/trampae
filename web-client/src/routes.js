import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Logon from './pages/Logon'
import Register from './pages/Register'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import NewService from './pages/NewService'
import Forget from './pages/Forget'
import Recover from './pages/Recover'
import Profile from './pages/Profile'
import PrivateRoute from './components/PrivateRoute'
import TalkWithUs from './pages/TalkWithUs'
export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" exact={true} component={Register} />
                <Route path="/new-service" exact={true} component={NewService} />
                <Route path="/aboutus" exact={true} component={AboutUs} />
                <Route path="/forget" exact={true} component={Forget} />
                <Route path="/profile" exact={true} component={Profile} />
                <Route path="/talkwithus" exact={true} component={TalkWithUs} />

                <PrivateRoute exact={true} component={Home} path="/home" />
                <PrivateRoute exact={true} component={Profile} path="/profile" />
                <Route exact={true} component={Recover} path="/recover/:url_hash"/>

                <Route path="/*" component={() =>(<div> NOT FOUND COMPONENT!!! </div>)} />
            </Switch>
        </BrowserRouter>
    )
}
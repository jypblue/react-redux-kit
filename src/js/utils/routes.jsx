/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-07-28 10:50:51
 * @version $Id$
 */

import { Route,IndexRoute } from "react-router";
import React from "react";

import App from "../containers/App";
import HomePage from "../components/Home";


const CounterPage =  (location, cb) => {
        require.ensure([], require => {
        cb(null, require('../containers/counterPage'))
    },'counterpage')
}
const TodoPage =  (location, cb) => {
        require.ensure([], require => {
        cb(null, require('../containers/TodoPage'))
    },'todopage')
}
const RealWorldPage =  (location, cb) => {
        require.ensure([], require => {
        cb(null, require('../containers/realworld/RealWorldPage'))
    },'realworldpage')
}
const RepoPage =  (location, cb) => {
        require.ensure([], require => {
        cb(null, require('../containers/realworld/RepoPage'))
    },'repopage')
}
const UserPage =  (location, cb) => {
        require.ensure([], require => {
        cb(null, require('../containers/realworld/UserPage'))
    },'userpage')
}
const AboutPage = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../components/About'))
    },'about')
}
const HotelPage =  (location, cb) => {
        require.ensure([], require => {
        cb(null, require('../components/hotelpunish/Hotel'))
    },'hotelpage')
}
const error404 =  (location, cb) => {
        require.ensure([], require => {
        cb(null, require('../components/404'))
    },'errorpage')
}




export default (
  <Route name="app" path="/" component={App}>
      <IndexRoute component={HomePage}/>
      <Route path="home" component={HomePage} />
      <Route path="todo" getComponent={TodoPage} />
      <Route path="counter" getComponent={CounterPage} />
      <Route path="realworld" getComponent={RealWorldPage}>
        <Route path="/realworld/:login/:name"
           getComponent={RepoPage} />
        <Route path="/realworld/:login"
           getComponent={UserPage} />
      </Route>
      <Route path="hotel" getComponent={HotelPage} />
      <Route path="about" getComponent={AboutPage} />
      <Route path="*" getComponent={error404}/>
  </Route>
);







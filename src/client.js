import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app.jsx'
import Menu from './components/menu.jsx'
import Page from './components/page.jsx'

import { Router, Route, DefaultRoute, RouteHandler, Link, browserHistory, IndexRoute } from 'react-router'

const onDeviceReady = () => {
  console.log("Hello");
  let data = "";
  if (document.getElementById('initial-data').getAttribute('data-json') != '') {
    data = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'));
  }
  // ReactDOM.render(<App data={data} />, document.getElementById("app"));

  ReactDOM.render(
    <Router history={browserHistory}>
      <Route component={App} data={data} path="/" />
      <Route path="/about" component={Page} name="about" />
    </Router>
  , document.getElementById("app"));

}
document.addEventListener('DOMContentLoaded', onDeviceReady, false);

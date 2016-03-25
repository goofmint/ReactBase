import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app.jsx'

const onDeviceReady = () => {
  console.log("Hello");
  const data = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'));
  ReactDOM.render(<App data={data} />, document.getElementById("app"));
}
document.addEventListener('DOMContentLoaded', onDeviceReady, false);

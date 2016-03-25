require('babel-core/register')({presets: ['react', 'es2015']});

var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Handlebars from 'handlebars'

import App from './src/components/app'

const app = express();

app.set('port', (process.env.PORT || 3000));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  var data = [
    { id: 1, name: 'backbone' },
    { id: 2, name: 'react' },
    { id: 3, name: 'angular' },
  ];
  const template = Handlebars.compile(fs.readFileSync('./src/views/index.hbs').toString());
  res.send(template({
    initialData: JSON.stringify(data),
    markup: ReactDOMServer.renderToString(React.createElement(App, {data: data}))
  }));
});

app.listen(app.get('port'), () => {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});


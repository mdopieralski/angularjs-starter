'use strict';

var express = require('express');
var path = require('path');

var staticFiles = express.static(__dirname + '/dist');
var app = express();

app.set('views', path.join(__dirname, '/src/'));
app.set('view engine', 'ejs');
app.use(function(req, res, next) {
  if (req.url.match(/\/(app|assets)\//)) {

    return staticFiles(req, res, next);
  } else {

    res.render('index', {
      htmlWebpackPlugin: {
        options: {
          IS_BUILD: true,
          E2E_TEST: true
        }
      }
    });
  }
});

app.listen(process.env.PORT || 3000, 'localhost', function(err) {

  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:' + (process.env.PORT || 3000));
});

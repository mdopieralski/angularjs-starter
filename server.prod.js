'use strict';

var express = require('express');
var fs = require('fs');

var app = express();

var index = fs.readFileSync(__dirname + '/dist/index.html').toString();
var staticFiles = express.static(__dirname + '/dist');
var app = express();

app.use(function(req, res, next) {
  if (req.url.match(/\/(app|assets)\//)) {
    return staticFiles(req, res, next);
  } else {
    res.send(index);
  }
});

app.listen(process.env.PORT || 5000);

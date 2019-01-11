// Conventional header
"use strict";

// "Grab" express from source code in node_modules
// Set a variable named express to this
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');

// Call express function and set app to what express() returns.
var app = express();

// Serve static files (CSS, images, js files, etc)
app.use(express.static(path.join(__dirname, '/resources')));
// Set view engine to HTML so app can render html files
app.engine('html', require('ejs').renderFile);
// Serve favicon
app.use(favicon(path.join(__dirname + '/resources/assets/favicon.ico')));

// Tells app to execute code in the handler function when the '/' route is requested.
// Handler function: first parameter is the REQUEST, second parameter is the RESPONSE.
app.get('/', function(req, res) {
  res.render('matt.html');
});

app.get('/warbyparker', function(req, res) {
  res.render('warbyparker.html');
});

app.get('/wp_iOS', function(req, res) {
  res.render('wp_iOS.html');
});

app.get('/brij', function(req, res) {
  res.render('brij.html');
});

app.get('/livenation', function(req, res) {
  res.render('livenation.html');
});

add.get('/sep', function)req, res) {
  res.render('sep.html');
});

app.get('/visuals', function(req, res) {
  res.render('visuals.html');
});

app.get('/process', function(req, res) {
  res.render('process.html');
});

app.get('/website', function(req, res) {
  res.render('website.html');
});

app.get('*', function(req, res) {
  res.send('404: page not found');
});

// Tells app what port ("channel") to "listen" on.
app.listen(process.env.PORT || 3000);

// CTRL + C to stop running


// SETTING UP A NODE APP
// 1. npm init: sets up a package.json file for you
// 2. npm install --save <package_name>: installs said package as a dependency for your project.
//    For this case, we did npm install --save express

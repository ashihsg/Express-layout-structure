"use strict"

var express = require ('express');
var logger = require ('morgan');
var bodyParser = require ('body-parser');
var app = express ();
var config = require("./config");
var env = config.env || "test";
var routes = require ("./routes")(env);
var path = require('path');
app.use (bodyParser.json ({limit: '50mb'}));
app.use('/bower_components',  express.static(path.join(__dirname, '../bower_components')));
app.use (bodyParser.urlencoded ({ extended: false, limit: '50mb' }));

app.use(function (req, res, next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'userId, X-TtainiumId, xid, X-Requested-With, content-type, token');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use ('/categories', routes.Category);

module.exports = app;

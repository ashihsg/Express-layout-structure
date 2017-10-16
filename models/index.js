"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var config = require("../config");

module.exports = function (env){

    //var env = context.stage || config.env || "test";
    var dbconfig = require(__dirname + '/../config/config.json')[config.env || "live"];
    var sequelize = new Sequelize(dbconfig.database, dbconfig.username, dbconfig.password, dbconfig);
    var db = {};

    fs
      .readdirSync(__dirname)
      .filter(function(file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
      })
      .forEach(function(file) {
        var model = sequelize["import"](path.join(__dirname, file));
        db[model.name] = model;
      });

    Object.keys(db).forEach(function(modelName) {
        if ("associate" in db[modelName]) {
        db[modelName].associate(db);
        }
    });

    db.sequelize = sequelize;
    db.Sequelize = Sequelize;

    return db;
}

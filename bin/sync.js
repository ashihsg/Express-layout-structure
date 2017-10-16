#!/usr/bin/env node
var config = require("../config");
var env = "test";
var models = require("../models")(env);
var md5 = require ('md5');
var fs = require('fs');
var backupDir = __dirname + '/../db-backup';
var mysqlDump = require('mysqldump');
var dbconfig = require(__dirname + '/../config/config.json')[config.env || "live"];

/* Backup database before */
if (!fs.existsSync(backupDir)) {
	fs.mkdirSync(backupDir);
}

var datetime = new Date();
var backupFile = backupDir + '/' + datetime.toISOString().slice(0,19).replace(/T|-|:/g,"") + '.sql';

mysqlDump({
    host: dbconfig.host,
    user: dbconfig.username,
    password: dbconfig.password,
    database: dbconfig.database,
    dest: backupFile
}, function(err){
	if(err){
		console.log(err);
	}else{
		models.sequelize.sync({force: true}).then(function () {
		    models.Admin.create ({
		        email: "admin@testdb.com",
		        password: md5 ("admin1234"),
				role: 1
		    }).then (function (admin){
		        console.log ("Sync Database.");
		    }).catch (function (err){
		        console.log ("No admin added.");
		    });
			//console.log ("Sync Database.");
		});
	}
});

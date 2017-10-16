
"use strict";
var config = require("../config");
var chai = require("chai");
var path = require("path");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var context = require("aws-lambda-mock-context");

// Use should flavour for Mocha
chai.should();
chai.use(sinonChai);
var handler = require("../lambda").handler;
var now = Date.now();
var now2 = now + 100;

describe("User", function() {
	it("Can get list of all Users", function(done) {
		handler({
			operation: "User.all",
			data: {
			}
		}, context());
		context.Promise.then(function(data) {
			done();
		}).catch(function(err) {
			done(err);
		});
	});

	it("Can get a User", function(done) {
		handler({
			operation: "User.findById",
			data: {
				header : {
					userId : "1"
				}
			}
		}, context());
		context.Promise.then(function(data) {
			done();
		}).catch(function(err) {
			done(err);
		});
	});

	it("Can get a User Subscription", function(done) {
		handler({
			operation: "User.findUserSubscription",
			data: {
				header : {
					userId : "1"
				},
				id : "2"
			}
		}, context());
		context.Promise.then(function(data) {
			done();
		}).catch(function(err) {
			done(err);
		});
	});


	it("It will create User", function (done) {
		handler({
			operation: "User.create",
			data: {
				header: {
					userId : 1
				},
				id : "1",
				data: {
					fullName: "Noman Maqsood",
					dob: "12-aug-1991",
					gender: "Male",
					phone : "+923004441180",
					password : "1234",
					email : "nomanmaqsood@live.com",
					company : "cellsmartpos",
					zipcode : "54000"
				}
			}
		}, context());
		context.Promise.then(function(data) {
			done();
		}).catch(function(err) {
			done(err);
		});
	});

	it("It will Update User", function (done) {
		handler({
			operation: "User.update",
			data: {
				id : "8",
				header: {
					userId : 1
				},
				data: {
					fullName: "Noman Maqsood",
					dob: "12-August-1991",
					gender: "Male",
					phone : "+923004441180",
					password : "1234",
					address : "Samananad Lahore",
					email : "nomanm@gmail.com",
					company : "cellsmartpos",
					zipcode : "54000"
				}
			}
		}, context());
		context.Promise.then(function(data) {
			done();
		}).catch(function(err) {
			done(err);
		});
	});

	it("It will Update User", function (done) {
		handler({
			operation: "User.update",
			data: {
				id : "1",
				header: {
					userId : 1
				},
				data: {
					pictureURL: "www.google.com"
				}
			}
		}, context());
		context.Promise.then(function(data) {
			done();
		}).catch(function(err) {
			done(err);
		});
	});


	it("It will Delete User", function (done) {
		handler({
			operation: "User.deleteUser",
			data: {
				id : "1",
				header: {
					storeId: 1
				}
			}
		}, context());
		context.Promise.then(function(data) {
			done();
		}).catch(function(err) {
			done(err);
		});
	});
});

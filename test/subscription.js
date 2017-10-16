/**
 * Test suite for Microservice endpoint for managing brands.
 *
 * @author Ali Rizwan      <ali.rizwan@cellsmartpos.com>
 * @since  12 Oct. 2015
 */
//"use strict";
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

describe("Subscription", function() {
	it("Can get list of Subscriptions", function(done) {
		handler({
			operation: "Subscription.all",
			data: {
			}
		}, context());
		context.Promise.then(function(data) {
			done();
		}).catch(function(err) {
			done(err);
		});
	});

	it("Can get Subscription By Id", function(done) {
		handler({
			operation: "Subscription.findById",
			data: {
				id : "1"
			}
		}, context());
		context.Promise.then(function(data) {
			done();
		}).catch(function(err) {
			done(err);
		});
	});

	it("It will create Subscription", function (done) {
		handler({
			operation: "Subscription.create",
			data: {
				id : "1",
				data: {
					name: "Test Subscription"
				}
			}
		}, context());
		context.Promise.then(function(data) {
			done();
		}).catch(function(err) {
			done(err);
		});
	});

	it("It will Subscribe User", function (done) {
		handler({
			operation: "Subscription.subscribe",
			data: {
				header : {userId : "1"},
				id : "1",
				data : {
					userSubscription : [{
						duration : "123",
						remaining : "3",
						action : "",
						SubscriptionId : "1"
					}]			
				}

			}
		}, context());
		context.Promise.then(function(data) {
			done();
		}).catch(function(err) {
			done(err);
		});
	});

	it("It will Update Subscription", function (done) {
		handler({
			operation: "Subscription.update",
			data: {
				id : "1",
				data: {
					name: "Newsletter",
				}
			}
		}, context());
		context.Promise.then(function(data) {
			done();
		}).catch(function(err) {
			done(err);
		});
	});


	it("It will Delete Subscription", function (done) {
		handler({
			operation: "Subscription.deleteSubscription",
			data: {
				id : "1",
			}
		}, context());
		context.Promise.then(function(data) {
			done();
		}).catch(function(err) {
			done(err);
		});
	});

	it("It will Delete User Subscription", function (done) {
		handler({
			operation: "Subscription.unsubscribe",
			data: {
				header : {
					userId : "1"
				},
				data :{
					SubscriptionId : "1"
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

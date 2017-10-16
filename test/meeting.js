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

describe("Meeting", function() {
	it("Can get list of all Meetings of User", function(done) {
		handler({
			operation: "Meeting.all",
			data: {
				header : {
					userId : "2"
				}
			}
		}, context());
		context.Promise.then(function(data) {
			done();
		}).catch(function(err) {
			done(err);
		});
	});

	it("Can get a Meeting of User", function(done) {
		handler({
			operation: "Meeting.findById",
			data: {
				header : {
					userId : "2"
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

});

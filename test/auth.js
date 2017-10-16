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

describe("Auth", function() {

	it("It will signup User", function (done) {
		handler({
			operation: "Auth.register",
			data: {
				data: {
					fullName: "Noman Maqsood",
                    dob: "1991-10-12",
                    gender: "Male",
                    pictureURL: "http://www.google.com",
                    email: "nomanmaqsood@live.com",
                    password: "123",
                    nationality: "Pakistani",
                    mobileNum: "+923004441180",
                    homeNum: "04237590488",
                    workEmail: "noman@cellsmartpos.com",
                    homeAddress: "95, Chaudary Colony Samanabad Lahore",
                    workAddress: "Al Hafeez Shopping Mall Lahore",
                    company: "CellSmartPOS",
                    zipcode: "54000",
				}
			}
		}, context());
		context.Promise.then(function(data) {
			done();
		}).catch(function(err) {
			done(err);
		});
	});

	it("It will verify User", function (done) {
		handler({
			operation: "Auth.authenticate",
			data: {
				data: {
					password : "123",
					email : "nomanmaqsood@live.om",
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

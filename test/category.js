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

describe("Category", function() {
	it("Can get list of all Categories", function(done) {
		handler({
			operation: "Category.all",
			data: {
			}
		}, context());
		context.Promise.then(function(data) {
			done();
		}).catch(function(err) {
			done(err);
		});
	});

	it("Can get a Category", function(done) {
		handler({
			operation: "Category.findById",
			data: {
				id : "2"
			}
		}, context());
		context.Promise.then(function(data) {
			done();
		}).catch(function(err) {
			done(err);
		});
	});

	it("Can get a All Products in Category", function(done) {
		handler({
			operation: "Category.productCategory",
			data: {
				id : "2"
			}
		}, context());
		context.Promise.then(function(data) {
			done();
		}).catch(function(err) {
			done(err);
		});
	});

	it("Can get a  Product in Category", function(done) {
		handler({
			operation: "Category.productCategoryById",
			data: {
				id : "2"
			}
		}, context());
		context.Promise.then(function(data) {
			done();
		}).catch(function(err) {
			done(err);
		});
	});

	it("It will create a Category", function(done) {
		handler({
			operation: "Category.create",
			data: {
				data: {
					name: "T-Shirts"
				}			}
		}, context());
		context.Promise.then(function(data) {
			done();
		}).catch(function(err) {
			done(err);
		});
	});

	it("It will update a Category", function(done) {
		handler({
			operation: "Category.update",
			data: {
				data: {
					name: "Shirts"
				},
				id: "1"
			}
		}, context());
		context.Promise.then(function(data) {
			done();
		}).catch(function(err) {
			done(err);
		});
	});

	it("It will delete a Category", function(done) {
		handler({
			operation: "Category.deleteCategory",
			data: {
				id: "1"
			}
		}, context());
		context.Promise.then(function(data) {
			done();
		}).catch(function(err) {
			done(err);
		});
	});

});

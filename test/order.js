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

describe("Order", function() {

	it("It will Place an Order", function (done) {
		handler({
			operation: "Order.checkout",
			data: {
				data: {
					contactPerson: "Noman Maqsood",
                    phoneLine1: "+923004441180",
                    phoneLine2: "04237590488",
                    shipmentAddress: "95, Chaudary Colony Samanabad Lahore",

                    orderDetails: [{
                    	productId: "1",
                    	price: "234",
                    	quantity: "10",
                    	isReplaceAble: "true",
                    	discountAmount: "6.3"
                    }, {
                    	productId: "2",
                    	price: "500",
                    	quantity: "6"
                    }]

				},
				header: {
					userId: "1"
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

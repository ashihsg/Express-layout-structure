"use strict";

/**
 * @module config/private
 * @desc An object that sets and calculates configurations settings that can should not be exposed in public-facing compiled JavaScript.
 * @see module:config
 * @see module:config/public
 */

module.exports.paytabsConfig = {
	/*merchant_email: "ashishg.synsoft@gmail.com",
	secret_key: "fFOmo96b1t4AXnxG2cap7IZ3zO1b3Dhjj6FIfMUhgYRemoUpB5OINOMnCNyGrQ0KWGtctntJmkYIJT8lYX3LLQ9oDH54x6PuMiGf",*/
	merchant_email: "vinod@epicurecatering.ae",
	secret_key: "ULWZXoV0A51xgGWcLlaQYOPl8RtYCAEwmBwjZskAxl7N230OobFn0uI8mc6YNLu9m1tmtOW093Oc7O0w0FT09C9vPgtC1YMoZgKs",
	site_url:"https://www.test.ae/",
	return_url:"https://www.test.ae/",
	verifyPaymentApiURL:"https://www.test.ae/",
	createPayPageApiURL:"https://www.test.ae/",
	paytabUrl:"https://www.paytabs.com/apiv2/",
	validate_secret_key:"validate_secret_key",
	create_pay_page:"create_pay_page",
	verify_payment:"verify_payment"
};
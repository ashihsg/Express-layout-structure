"use strict";
/**
 * @module config/public
 * @desc An object that sets and calculates configurations settings that can be exposed in public-facing compiled JavaScript.
 * @see module:config
 * @see module:config/private
 */

/** The name of the enviornment in which the application is executed. Can be set via the <code>NODE_ENV</code> enviornmental variable.
 * @type {string}
 * @default unknown
 */
module.exports.env = process.env.NODE_ENV_OVERRIDE || process.env.NODE_ENV || "live";

module.exports.name = process.env.MODULE_NAME || "test-api";

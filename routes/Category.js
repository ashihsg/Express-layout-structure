"use strict"

module.exports = function (models) {
    var express = require ('express');
    var router = express.Router ();
    var Category = require ("../lib/Category")(models);

    router.get ('/', function (req, res) {
    	Category.all ({}, function (data) {
    		 res.status (data.code).json (data);
    	});
    });

    router.get ('/:id', function (req, res) {
    	// Category find by id
    });

    router.post ('/', function (req, res) {
    	// Add Category
    });

    router.put ('/:id', function (req, res) {
    	// Update Category
    });

    router.delete ('/:id', function (req, res) {
    	// Delete Category
    });

    return router;
}

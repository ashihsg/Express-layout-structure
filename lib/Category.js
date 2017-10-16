"use strict"

module.exports = function (models) {

	function all (data, callback) {
		models.Category.findAll ({
			include: []
		}).then (function (category) {
			callback ({status: true, code:200, data: category});
		}).catch (function (err) {
			callback({status: false, code:400, data: err});
		});
	}
	
	return {
		all: all
	}

};

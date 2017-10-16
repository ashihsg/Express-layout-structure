"use strict";

/**
 * Tasks that will zip all the files so that the zip file can be deployed to
 * AWS Lambda.
 *
 * @author C. Spencer Beggs      <spencer@beg.gs>
 * @since  29 Aug. 2015
 */

var config = require("./config");
var gulp = require("gulp");
var zip = require("gulp-zip");
var del = require("del");
var copy = require("gulp-copy");
var install = require("gulp-install");
var awsLambda = require("node-aws-lambda");
var browserify = require("browserify");
var envify = require("envify");
var transform = require("vinyl-transform");

gulp.task("clean", function() {
	return del(["./dist", "./dist.zip"]);
});

gulp.task("envify", function() {
	var envified = transform(function(filename) {
		return envify(filename);
	});

	return gulp.src(["dist/**/*.js"])
		.pipe(envified)
		.pipe(gulp.dest("dist/"));
});

gulp.task("copy", function() {
	return gulp.src(["lib/**/*", "config/**/*", "models/**/*", "lambda/**/*"])
		.pipe(copy("dist/"))
});

gulp.task("node-mods", function() {
	return gulp.src("./package.json")
		.pipe(gulp.dest("dist/"))
		.pipe(install({
			production: true
		}));
});

gulp.task("zip", function() {
	return gulp.src(["dist/**/*"])
		.pipe(zip("dist.zip"))
		.pipe(gulp.dest("./"));
});

gulp.task("upload", function(callback) {
	awsLambda.deploy("./dist.zip", {
		accessKeyId: config.aws.key, // optional
		secretAccessKey: config.aws.secret, // optional
		region: config.aws.region,
		handler: "lambda/index.handler",
		role: config.aws.role,
		functionName: config.aws.function + "-" + config.env,
		timeout: config.aws.timeout,
		memorySize: config.aws.memorySize
	}, callback);
});

gulp.task("deploy", gulp.series(["clean", "copy", "envify", "node-mods", "zip", "upload"]));

#!/usr/bin/env node

var url = require("url");
var path = require("path");

module.exports = function(src, dst){
	if (src === dst) return "";
	src = url.parse(src);
	dst = url.parse(dst);
	if (src.host !== dst.host || src.protocol !== dst.protocol || src.auth !== dst.auth) return url.resolve(src, dst);
	return path.relative(src.pathname, dst.pathname);
};
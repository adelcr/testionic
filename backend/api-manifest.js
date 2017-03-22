// Api Manifest

var express 	= require('express');
var apiManifest	= express.Router();

apiManifest.use('/user', require('./api/user/base-user-api'));
apiManifest.use('/bus', require('./api/bus/base-bus-api'));
module.exports = apiManifest;
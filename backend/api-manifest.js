// Api Manifest

var express 	= require('express');
var apiManifest	= express.Router();

apiManifest.use('/user', require('./api/user/base-user-api'));
apiManifest.use('/admin', require('./api/admin/base-admin-api'));
apiManifest.use('/voyageur', require('./api/voyageur/base-voyageur-api'));

apiManifest.use('/bus', require('./api/bus/base-bus-api'));
module.exports = apiManifest;
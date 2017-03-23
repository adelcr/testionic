/**
 * Created by GMI-PC on 22/03/2017.
 */
// voyageur Api

var express = require('express');
var voyageurApi	= express.Router();
var voyageurRoute = require('../../routes/voyageur/base-voyageur-route');
var RouteAuth = require('../../util/application-auth/route-auth');

// Base user api routes
voyageurApi.post('/create', voyageurRoute.create);
voyageurApi.post('/login', voyageurRoute.login);
voyageurApi.get('/get', RouteAuth.protect, voyageurRoute.get);

module.exports = voyageurApi;
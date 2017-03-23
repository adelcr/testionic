/**
 * Created by GMI-PC on 22/03/2017.
 */
// voyageur Api

var express = require('express');
var voyageurApi	= express.Router();
var voyageurRoute = require('../../routes/voyageur/base-voyageur-route');

// Base user api routes

voyageurApi.post('/login', voyageurRoute.login);


module.exports = voyageurApi;
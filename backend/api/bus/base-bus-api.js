/**
 * Created by GMI-PC on 19/03/2017.
 */
// Bus Api

var express = require('express');
var busApi	= express.Router();
var busRoute = require('../../routes/bus/base-bus-route');

// Base user api routes
busApi.post('/create', busRoute.create);
busApi.post('/delete', busRoute.delete);
busApi.post('/update', busRoute.update);
busApi.get('/get', busRoute.get);

module.exports = busApi;
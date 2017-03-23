// User Api

var express = require('express');
var adminApi	= express.Router();
var adminRoute = require('../../routes/user/base-admin-route');

// Base user api routes
adminApi.post('/login', adminRoute.login);

module.exports = adminApi;
// User Api

var express = require('express');
var userApi	= express.Router();
var userRoute = require('../../routes/user/base-user-route');

// Base user api routes
userApi.post('/create', userRoute.create);
userApi.post('/login', userRoute.login);

module.exports = userApi;
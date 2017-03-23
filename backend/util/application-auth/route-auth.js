// Used when an auth token is required for a route

var	passport = require("passport");
var path = require('path');
var BearerStrategy = require("passport-http-bearer").Strategy;
var Voyageur = require(path.resolve(__dirname, '../../models/voyageur-model'));

// Use Bearer Strategy as authentication
passport.use(new BearerStrategy(
    function(token, done) {
        Voyageur.findOne({ authToken: token }, function (err, voyageur) {
            if (err) { return done(err); }
            if (!voyageur) { return done(null, false); }
            return done(null, voyageur, { scope: 'all' });
        });
    }
));

module.exports = {
    protect: passport.authenticate('bearer', { session: false })
};
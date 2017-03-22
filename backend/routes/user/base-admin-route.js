// User Routes

var path = require('path');
var validator = require('validator');
var Admin = require(path.resolve(__dirname, '../../models/admin-model'));
var ErrorMessages = require(path.resolve(__dirname, '../../util/error-messages'));
var AuthToken = require(path.resolve(__dirname, '../../util/application-auth/auth-token'));

exports.login = function(req, res) {

    var login = req.body.login;
    var password = req.body.password;

    if(!password || !login) {
        return res.status(400).json({ message: "We need both an email and password." });
    }

    Admin.findOne({login: login}, function(err, admin) {

        if (err) {
            return res.status(500).json({ message: ErrorMessages.unknown });
        }

        if (!admin) {
            return res.status(400).json({ message: "Woops, wrong login or password."});
        }

        if (admin.password===password) {

            var authToken = AuthToken.create(login, admin._id);

            admin.authToken = authToken;

            admin.save(function(err) {

                if (err) {
                    return res.status(500).json({ message: ErrorMessages.unknown });
                } else {
                    return res.status(200).json({ message: "OK", authToken: authToken });
                }

            });

        } else {
            return res.status(400).json({ message: 'Invalid Credentials' });
        }

    });

};

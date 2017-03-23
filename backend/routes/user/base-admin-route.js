// User Routes

var path = require('path');
var validator = require('validator');
var Admin = require(path.resolve(__dirname, '../../models/admin-model'));

exports.login = function(req, res) {

    var login = req.body.login;
    var password = req.body.password;

    if(!password || !login) {
        return res.status(400).json({ message: "We need both an email and password." });
    }

    Admin.findOne({'User.login': login}, function(err, admin) {

        if (err) {
            return res.status(500).json({ message: ErrorMessages.unknown });
        }

        if (!admin) {
            console.log(Admin.findOne({'User.login' : login}));
            return res.status(400).json({ message: "Woops, wrong login or password."});
        }

        if (admin.User.password===password) {

            return res.status(400).json({ message: 'Connection valide' });

        } else {

            return res.status(400).json({ message: 'Invalid Credentials' });
        }

    });

};

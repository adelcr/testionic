/**
 * Created by GMI-PC on 22/03/2017.
 */
// Voyageur Routes

var path = require('path');
var validator = require('validator');
var Voyageur = require(path.resolve(__dirname, '../../models/voyageur-model'));

exports.create = function(req, res) {

    var name = req.body.name;
    var login= req.body.login;
    var email = req.body.email;
    var password = req.body.password;

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'All those boxes need filling.' });
    }

    if(!validator.isEmail(email)) {
        return res.status(400).json({ message: 'Sorry, but that\'s an invalid email.' });
    }

    email = email.toLowerCase();

    var voyageur = new Voyageur({
        email: email
        , password: password
        , name: name
        ,login:login
    });

    voyageur.authToken = AuthToken.create(email, voyageur._id);

    voyageur.save(function(err, createdVoyageur) {

        if (err) {

            if (err.errors && err.errors.email) {
                return res.status(400).json({ message: err.errors.email.message });
            }
            else {
                console.log(err);
                return res.status(500).json({ message: ErrorMessages.unknown });
            }

        }
        else {

            return res.status(200).json(createdVoyageur.toObject({ virtuals: true }));

        }

    });

};

exports.login = function(req, res) {

    var login = req.body.login;
    var password = req.body.password;

    if(!password || !login) {
        return res.status(400).json({ message: "We need both an email and password." });
    }


    Voyageur.findOne({'User.login': login}, function(err, voyageur) {

        if (err) {
            return res.status(500).json({ message: ErrorMessages.unknown });
        }

        if (!voyageur) {
            console.log(Voyageur.findOne({'User.login' : login}));
            return res.status(400).json({ message: "Woops, wrong email or password." });
        }

        if (voyageur.User.password===password) {



            return res.status(400).json({ message: 'Connection valide' });

        } else {

            return res.status(400).json({ message: 'Invalid Credentials' });
        }

    });

};


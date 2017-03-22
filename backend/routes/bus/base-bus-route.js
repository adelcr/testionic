/**
 * Created by GMI-PC on 19/03/2017.
 */
// User Routes

var path = require('path');
var validator = require('validator');
var Bus = require(path.resolve(__dirname, '../../models/bus-model'));

exports.create = function (req, res) {
    var bus = new Bus(req.body);

    bus.save(function (err) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.json(bus);
        }
    });
};

exports.delete = function (req, res) {
    var bus = req.bus;

    bus.remove(function (err) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.json(bus);
        }
    });
};

exports.update = function (req, res) {
    var bus = req.article;

    bus.Description = req.body.Description;
    bus.Dispo = req.body.Dispo;
    bus.NbPassager =req.body.NbPassager;

    bus.save(function (err) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.json(bus);
        }
    });
};

exports.get = function (req, res) {
    Bus.find().sort('-Dispo').populate('bus', 'displayName').exec(function (err, bus) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.json(bus);
        }
    });
};

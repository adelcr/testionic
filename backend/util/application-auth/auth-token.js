// Auth token util

var uuid = require('node-uuid');
var jwt = require('jwt-simple');
var jwtKey = 'Doo ts doo ts dance party.';

exports.create = function(email, VoyageurId) {
    
    var voyageurObject = {
        email: email,
        VoyageurId: VoyageurId,
        issuedAt: new Date(),
        entropy: uuid.v4()
    };

    return jwt.encode(voyageurObject, jwtKey);
}

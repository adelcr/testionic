/**
 * Created by GMI-PC on 22/03/2017.
 */

// Voyageur, Model

var mongoose = require('mongoose');
var crypto = require('crypto');
var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var VoyageurSchema =new Schema({
    cin: {type: Number, index:true, unique: true },

    User:{
        email: { type: String, lowercase: true, trim: true, index: true, required: true, unique: true }

        , name: { type: String, trim: true,index: true, required: true  }

        , image: {type: String, index:true}

        , login: { type: String, lowercase: true, trim: true, required: true, unique: true }

        , password: { type: String, trim: true, required: true, index: true}

        , hash: String

        , salt: String

        , authToken: {type:String, required: true}

        , utilityProviders: []
    }
});
// Virtual method for password getting and setting
VoyageurSchema.virtual('password')
    .get(function() {
        return this.hash;
    })
    .set(function(password) {
        this.salt = this.makeSalt();
        this.hash = this.encryptPassword(password);
    })
;

// Schema methods
VoyageurSchema.methods = {

    authenticate: function(plainText) {
        return this.encryptPassword(plainText) === this.password;
    },

    makeSalt: function() {
        return crypto.randomBytes(16).toString('base64');
    },

    encryptPassword: function(password) {
        if (!password || !this.salt) return '';
        var salt = new Buffer(this.salt, 'base64');
        return crypto.pbkdf2Sync(password, salt, 10000, 64).toString('base64');
    }

};

// Unique field plugin (makes better error messages)
VoyageurSchema.plugin(uniqueValidator, { message: 'Sorry, someone is already using {VALUE} for their {PATH}.'});

module.exports = mongoose.model('Voyageur', VoyageurSchema);
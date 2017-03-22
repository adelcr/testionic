/**
 * Created by mohamedchaar on 22/03/17.
 */

/**
 * Module dependencies.
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

/**
 * Admin Schema
 */

var AdminPaiementSchema =new Schema({
    matricule: {type: Number, index:true, required: true, unique: true },

    User:{
        email: { type: String, lowercase: true, trim: true, index: true, required: true, unique: true }

        , name: { type: String, trim: true,index: true, required: true  }

        , image: {type: String, index:true}

        , login: { type: String, lowercase: true, trim: true, required: true, unique: true }

        , password: { type: String, trim: true, required: true, index: true}

        , authToken: {type:String, required: true}
    }
});
module.exports = mongoose.model('AdminP', AdminPaiementSchema);
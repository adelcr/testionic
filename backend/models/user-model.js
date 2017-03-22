// User Model

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({

   email: { type: String, lowercase: true, trim: true, index: true, required: true, unique: true }

   , name: { type: String, trim: true,index: true, required: true  }

   , image: {type: String, index:true}

    , login: { type: String, lowercase: true, trim: true, required: true, unique: true }


});

module.exports = mongoose.model('User', UserSchema);
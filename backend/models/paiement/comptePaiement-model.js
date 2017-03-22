/**
 * Created by mohamedchaar on 22/03/17.
 */
/**
 * Created by mohamedchaar on 22/03/17.
 */

/**
 * Module dependencies.
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

/**
 * ComptePaiement Schema
 */

var ComptePaiement =new Schema({
    CIN: {
        type: Number,
        index:true,
        required: true,
        unique: true},
    NumberCard: {
        type: Number,
        index:true,
        required: true,
        unique: true },
    passwrod: {type: Number,
        index:true,
        required: true,
        unique: true },
    User:{
        type: Schema.ObjectId,
        index: true,
        ref: 'voyageur'
    }
});
module.exports = mongoose.model('ComptePaiement', comptepaiement);
/**
 * Created by mohamedchaar on 22/03/17.
 */
'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * duree Schema
 */
var dureeSchema = new Schema({
    NbrJour: {
        type: number,
        index: true },
    Nbrheures:{
        type: number,
        index: true },
    Title:{
        type:String,
        index:true}

});
module.exports = mongoose.model('duree', dureeSchema);

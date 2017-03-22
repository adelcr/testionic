/**
 * Created by mohamedchaar on 22/03/17.
 */
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
 * Bus Schema
 */

var ReseauBus = new Schema({

    NbrLignes: number,
    Title:String
});
module.exports = mongoose.model('Reseau', ReseauBus);

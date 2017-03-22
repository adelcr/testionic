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
 * Reseau Schema
 */

var ReseauBus = new Schema({

    NbrLignes:{type:number,
                index:true},
    Title:{type:String,
            index: true}
});
module.exports = mongoose.model('Reseau', ReseauBus);

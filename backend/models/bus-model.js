/**
 * Created by GMI-PC on 19/03/2017.
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
var BusSchema = new Schema({

    Description: {
        type: String,
        default: '',
        trim: true,
        required: 'Descrition cannot be blank'
    },
    Dispo: {
        type: Boolean,
        trim: true
    },
    NbPassager: {
        type: number,
        trim: true
    }
});
var b = new BusSchema;
b.save(callback);
module.exports = mongoose.model('Bus', BusSchema);
